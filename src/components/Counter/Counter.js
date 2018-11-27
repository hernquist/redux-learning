import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        const { counter, storeResults } = this.props;
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" />
                <CounterControl label="Add 8" />
                <CounterControl label="Decrement" />
                <CounterControl label="Subtract -12" />
                <CounterControl label="Reset" />
                <CounterControl label="Random" />
                
                <hr />
                <button>Store Result</button>
                <ul>
                    {storedResults.map(result => (
                        <li key={result.id} >{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storeResults: state.res.results
    }
};

export default connect(mapStateToProps, snull)(Counter);