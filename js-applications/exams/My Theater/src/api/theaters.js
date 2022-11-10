import { del, get, post, put } from './api.js'

export async function getAllTheaters() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function createTheater(theater) {
    return post('/data/theaters', theater)
}

export async function getTheaterById(id) {
    return get('/data/theaters/' + id)
}

export async function updateTheater(id, theater){
    return put('/data/theaters/'+id, theater)
}

export async function deleteTheater(id){
    return del('/data/theaters/'+id)
}

export async function getUsersTheaters(userId){
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

// Bonus

export async function createLike(theaterId){
    return post('/data/likes', {theaterId})
}

export async function getTotalLikesForTheater(theaterId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}

export async function isTheaterLikedByCurrentUser(theaterId, userId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}