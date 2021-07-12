/* eslint-disable*/
import { get, post, deletes } from './http'

// =======================> 管理员 API
// 是否登录成功
export const getLoginStatus = (params) => post(`client/admin/login/status`, params)


// =======================> 用户 API
// 返回所有用户
export const getAllUser = () => get(`client/user`)
// 返回指定ID的用户
export const getUserOfId = (id) => get(`client/user/detail?id=${id}`)
// 添加用户
export const setUser = (params) => post(`client/user/add`, params)
// 更新用户信息
export const updateUserMsg = (params) => post(`client/user/update`, params)
// 删除用户
export const deleteUser = (id) => get(`client/user/delete?id=${id}`)


// =======================> 收藏列表 API
// 返回的指定用户ID收藏列表
export const getCollectionOfUser = (userId) => get(`client/collection/detail?userId=${userId}`)
// 删除收藏的歌曲
export const deleteCollection = (userId, songId) => get(`client/collection/delete?userId=${userId}&&songId=${songId}`)

// =======================> 评论列表 API
// 获得指定歌曲ID的评论列表
export const getCommentOfSongId = (songId) => get(`client/comment/song/detail?songId=${songId}`)
// 获得指定歌单ID的评论列表
export const getCommentOfSongListId = (songListId) => get(`client/comment/songList/detail?songListId=${songListId}`)
// 更新评论
export const updateCommentMsg = (params) => post(`client/comment/update`, params)
// 删除评论
export const deleteComment = (id) => get(`client/comment/delete?id=${id}`)


// =======================> 歌手 API
// 返回所有歌手
export const getAllSinger = () => get(`client/singer`)
// 添加歌手
export const setSinger = (params) => post(`client/singer/add`, params)
// 更新歌手信息
export const updateSingerMsg = (params) => post(`client/singer/update`, params)
// 删除歌手
export const deleteSinger = (id) => get(`client/singer/delete?id=${id}`)


// =======================> 歌曲 API
// 返回所有歌曲
export const getAllSong = () => get(`client/song`)
// 返回指定歌手ID的歌曲
export const getSongOfSingerId = (id) => get(`client/song/singerId/detail?singerId=${id}`)
// 返回的指定用户ID收藏列表
export const getSongOfId = (id) => get(`client/song/detail?id=${id}`)
// 返回指定歌手名的歌曲
export const getSongOfSingerName = (name) => get(`client/song/singerName/detail?name=${name}`)
// 更新歌曲信息
export const updateSongMsg = (params) => post(`client/song/update`, params)
// 删除歌曲
export const deleteSong = (id) => get(`client/song/delete?id=${id}`)
// 添加歌手
export const addSong = (params) => post(`client/song/add`, params)

// =======================> 歌单 API
// 添加歌单
export const setSongList = (params) => post(`client/songList/add`, params)
// 获取全部歌单
export const getSongList = () => get(`client/songList`)
// 更新歌单信息
export const updateSongListMsg = (params) => post(`client/songList/update`, params)
// 删除歌单
export const deleteSongList = (id) => get(`client/songList/delete?id=${id}`)


// =======================> 歌单歌曲 API
// 给歌单添加歌曲
export const setListSong = (params) => post(`client/listSong/add`, params)
// 返回歌单里指定歌单ID的歌曲
export const getListSongOfSongId = (songListId) => get(`client/listSong/detail?songListId=${songListId}`)
// 删除歌单里的歌曲
export const deleteListSong = (songId) => get(`client/listSong/delete?songId=${songId}`)
