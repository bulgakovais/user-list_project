/** 
   * Проверяет наличие авторизации у пользователя
   */
export const getIsAuth = (state) => state.auth.user !== null;

export const getUser = (state) => state.auth.user;

/** 
   * Получает токен пользователя
   */
export const getToken = (state) => state.auth.user.token;

export const getErrors = (state) => state.auth.errors;