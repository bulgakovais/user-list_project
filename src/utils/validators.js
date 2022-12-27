

export const required = (value) => {
    if (value) return undefined
    else {
        return 'Ошибка'
    }
}
export const verifyEmail = (value) => {
    const regExEmail = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/
    if (regExEmail.test(value)) {
        return undefined
    } else {
        return 'Ошибка'
    }
}
export const verifyPass = (value, allInputs) => {
    return value === allInputs.confirm ? undefined : 'Ошибка';
}

export const verifyConfirmationPass = (value, allInputs) => {
    return value === allInputs.pass ? undefined : 'Ошибка';
}