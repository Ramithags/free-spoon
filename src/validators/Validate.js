export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email can't be empty."
    if (!re.test(email)) return 'Please enter valid email Id'
    return ''
  }
  
  export function passwordValidator(password) {
    if (!password) return "Password can't be empty."
    if (password.length < 6) return 'Password length must be more than 6 chars'
    return ''
  }

  export function nameValidator(name) {
    if (!name) return "Name can't be empty."
    return''
  }
   