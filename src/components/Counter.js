import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from '../actions/CounterActions';

const Counter = props => {
  return (
    <div>
      counter: {props.count}
      <button onClick={props.onIncrementClick}>increment</button>
      <button onClick={props.onDecrementClick}>decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrementClick: () => {
      dispatch({ type: 'DECREMENT' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
