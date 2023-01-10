

export function getLikesFromLocatStorage() {
    let likes = []
    const favorite = localStorage.getItem('likes')

    likes = JSON.parse(favorite)
    console.log('likes: ', likes);

    if (Array.isArray(likes)) {
        return likes
    } else return []
}


export function setLikeFromLocalStorage(userId, likes) {
    const user = { id: userId }
    const overlap = likes.find(el => el.id === user.id)
    if (!overlap) {
        return localStorage.setItem('likes', JSON.stringify([...likes, user]))
    } else return

}