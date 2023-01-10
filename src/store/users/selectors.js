/** 
   * Получает из стора список пользователей
   */
export const selectUsers = (state) => state.userList.users.data

export const selectUsersError = (state) => state.userList.usersError