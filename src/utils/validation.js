export const checkEmail = (email) => {
    const emailValid = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(email);
    if(!emailValid) return "Please enter a valid email of phone number."
    return null
}

export const checkPassword = (password) => {
    const passwordValid = /^(?=[\w' \t]{4,60}$)[\w']+(?:[ \t][\w']+)*$/.test(password);
    if(!passwordValid) return "The password must contain between 4 and 60 characters."
    return null
}