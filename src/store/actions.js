import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD } from './constants';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const add = value => ({
  type: ADD,
  value
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})