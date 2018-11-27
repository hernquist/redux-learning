import { INCREMENT_COUNTER, ADD } from './constants';
import { incrementCounter, add } from './actions';

describe('incrementCounter', () => {
  it(`returns INCREMENT_COUNTER action type with no payload`, () => {
    expect(incrementCounter()).toEqual({
      type: INCREMENT_COUNTER,
    })
  })
})

describe('add', () => {
  it(`returns ADD action type with a value payload`, () => {
    const value = 4;
    expect(add(value)).toEqual({
      type: ADD,
      value
    })
  })
})
