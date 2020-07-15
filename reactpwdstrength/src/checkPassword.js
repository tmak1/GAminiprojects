const checkPassword = pass => {
    pass = pass.toString()
    const hasLowerCase = pass.match(/[a-z]/g) ? true : false
    const hasUpperCase = pass.match(/[A-Z]/g) ? true : false
    const hasNumber = pass.match(/[0-9]+/g) ? true : false
    const hasNonAlphaNumeric = pass.match(/\W+/g) ? true : false
    const isOver8Char = pass.length > 8 ? true : false
    const isOver12Char = pass.length > 12 ? true : false

    const obj = { 
      hasLowerCase,
      hasUpperCase,
      hasNumber,
      hasNonAlphaNumeric,
      isOver8Char,
      isOver12Char
        }
    let score = 0
    Object.keys(obj).forEach(key => {
        if (obj[key]) {
            score++
        }
    });
    obj.score = score
    return obj
}

export default checkPassword