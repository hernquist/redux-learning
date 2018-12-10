import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../CounterControl/CounterControl';
import CounterOutput from '../CounterOutput/CounterOutput';
import './Counter.css';
import { incrementCounter, add, decrementCounter } from '../../store/actions';

class Counter extends Component {
  render () {
    const { counter, storeResults, add, incrementCounter, decrementCounter } = this.props;

    return (
        <Fragment>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={() => incrementCounter()} />
            <CounterControl label="Add 8" clicked={() => add(8)} />
            <CounterControl label="Decrement" clicked={() => decrementCounter()} />
            <CounterControl label="Subtract -12"  />
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

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter()),
        add: value => dispatch(add(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);