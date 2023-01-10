
/** 
       * Получает список лайков из localStorage
       * @return {Array} likes - список лайков из localStorage
       */
export function getLikesFromLocatStorage() {

    const likes = JSON.parse(localStorage.getItem('likes'))

    if (Array.isArray(likes)) {
        return likes
    } else return []
}


/** 
       * Записывает новый лайк в localStorage
       * @param {string} userId - id пользователя, на котором произошел click
       * @param {Array} likes - список всех лайков из localStorage
       * @return {Array} likes - обновленный список лайков
       */
export function setLikeFromLocalStorage(userId, likes) {
    const user = { id: userId }
    const overlap = likes.find(el => el.id === user.id)
    if (!overlap) {
        return localStorage.setItem('likes', JSON.stringify([...likes, user]))
    } else return

}