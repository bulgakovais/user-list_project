
/** 
       * Проверка значения на наличие
       * @param {string} value - значение инпута
       */
export const required = (value) => {
    if (value) return undefined
    else {
        return 'Ошибка'
    }
}

/** 
       * Проверка значения соответствие email
       * @param {string} value - значение инпута 
       */
export const verifyEmail = (value) => {
    const regExEmail = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/
    if (regExEmail.test(value)) {
        return undefined
    } else {
        return 'Ошибка'
    }
}


/** 
       * Проверка двух значений на соответствие
       * @param {string} value - значение инпута 
       * @param {object} allInputs - значения всех инпутов 
       */
export const verifyConfirmationPass = (value, allInputs) => {
    return value === allInputs.pass ? undefined : 'Ошибка';
}