import {
  INCREMENT_COUNTER,
  ADD
} from './constants';

export const incrementCounter = () => (
  {
    type: INCREMENT_COUNTER
  }
)

export const add = value => ({
  type: ADD,
  value
})