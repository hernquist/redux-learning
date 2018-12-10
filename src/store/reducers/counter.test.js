import reducer, { initialState } from './counter';
import { INCREMENT_COUNTER, ADD } from '../constants';

const testState = {
  counter: 99
}

describe('INCREMENT_COUNTER', () => {
  it('increases the initial state counter value by one', () => {
    const action = { type: INCREMENT_COUNTER }
    const state = reducer(initialState, action)
    expect(state.counter).toBe(1);
  })

  it('increases the counter stored in state by one', () => {
    const action = { type: INCREMENT_COUNTER }
    const state = reducer(testState, action)
    expect(state.counter).toBe(100);
  })
})

describe('ADD', () => {
  it(`increases the initial state counter value by the incoming action's value`, () => {
    const action = { type: ADD, value: 34 }
    const state = reducer(initialState, action);
    // TODO: fix typo 43 should be 34
    expect(state.counter).toBe(34);
  })

  it(`decreases the counter stored in state by the incoming action's value`, () => {
    const action = { type: ADD, value: -90 }
    expect(testState.counter).toBe(99);
    const state = reducer(testState, action)
    expect(state.counter).toBe(9);
  })
})
