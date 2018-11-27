import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../CounterControl/CounterControl';
import CounterOutput from '../CounterOutput/CounterOutput';
import './Counter.css';

class Counter extends Component {
  render () {
    const { counter, storeResults } = this.props;

    return (
        <Fragment>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" />
            <CounterControl label="Add 8" />
            <CounterControl label="Decrement" />
            <CounterControl label="Subtract -12" />
            <CounterControl label="Reset" />
            <CounterControl label="Random" />
            
            <hr />
            <div className="ResultsButton">Store Result</div>

            {storeResults.map(result => (
                <div key={result.id} >{result.value}</div>
            ))}
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storeResults: state.res.results
    }
};

export default connect(mapStateToProps, null)(Counter);