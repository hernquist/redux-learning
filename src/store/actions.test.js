describe('incrementCounter', () => {
  it(`returns INCREMENT_COUNTER action type with no payload`, () => {
    expect(increment()).toEqual({
      type: INCREMENT_COUNTER,
    })
  })
})

describe('add', () => {
  it(`returns ADD action type with a value payload`, () => {
    const value = 4;
    expect(increment(value)).toEqual({
      type: INCREMENT_COUNTER,
      value
    })
  })
})