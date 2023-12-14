export const wrongEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return email.trim () !== '' && emailRegex.test(email)
}

export const wrongPass = (password) =>{
    const hasNumber = /\d/.test(password);
    const passLenght = password.length > 6 && password.length < 10 ;

    return hasNumber && passLenght;
}