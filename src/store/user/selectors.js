/** 
   * Забирает из стора конкретного пользователя
   */
export const selectUserToId = (state) => state.user.user


/** 
   * Забирает из стора ошибку при загрузке конкретного пользователя
   */
export const selectUserError = (state) => state.user.userError