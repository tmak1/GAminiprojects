import checkPassword from './checkPassword.js'

test('0 point for empty password', () => {
    expect( checkPassword('') ).toEqual({ 
      score: 0,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

test('1 point for just spaces', () => {
expect( checkPassword('   ') ).toEqual({ 
    score: 1,
    hasLowerCase: false, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: true,
    isOver8Char: false,
    isOver12Char: false
})
})  

test('1 point for lowercase', () => {
  expect( checkPassword('pudding') ).toEqual({ 
    score: 1,
    hasLowerCase: true, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for uppercase', () => {
    expect( checkPassword('PUDDING') ).toEqual({ 
      score: 1,
      hasLowerCase: false, 
      hasUpperCase: true,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 


  test('1 point for numerals', () => {
    expect( checkPassword('123') ).toEqual({ 
      score: 1,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: true,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 


  test('1 point for non-alphanumeric', () => {
    expect( checkPassword('$  ') ).toEqual({ 
      score: 1,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: true,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

  test('1 point for over 8 characters', () => {
    expect( checkPassword('         ') ).toEqual({ 
      score: 2,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: true,
      isOver8Char: true,
      isOver12Char: false
    })
  }) 

  test('1 point for over 12 characters', () => {
    expect( checkPassword('             ') ).toEqual({ 
      score: 3,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: true,
      isOver8Char: true,
      isOver12Char: true
    })
  }) 

  test('2 points for combo upper-lower case', () => {
    expect( checkPassword('AaBb') ).toEqual({ 
      score: 2,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

  test('3 points for combo upper-lower case + numberals', () => {
    expect( checkPassword('A1a2bB') ).toEqual({ 
      score: 3,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

  test('4 points for combo upper-lower case + numberals + non-alphanumeric', () => {
    expect( checkPassword('A1a2$bB%') ).toEqual({ 
      score: 4,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      hasNonAlphaNumeric: true,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

  test('5 points for combo upper-lower case + numberals + non-alphanumeric and spaces/chars to fill over 8 characters', () => {
    expect( checkPassword(' A1 a2$B ') ).toEqual({ 
      score: 5,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      hasNonAlphaNumeric: true,
      isOver8Char: true,
      isOver12Char: false
    })
  }) 
  test('6 points for combo upper-lower case + numberals + non-alphanumeric and spaces/chars to fill over 12 characters', () => {
    expect( checkPassword(' A1 a2$B 1x >') ).toEqual({ 
      score: 6,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      hasNonAlphaNumeric: true,
      isOver8Char: true,
      isOver12Char: true
    })
  }) 
// test.todo('2 points for lowercase and uppercase')