import axios from "axios";

const store = {
  state: {
    HOST: 'http://47.118.78.168:8888',
    // HOST: 'http://localhost:8888',
    isPlay: false,
    url: '',
    id: ''
  },
  getters: {
    isPlay: state => state.isPlay,
    url: state => state.url,
    id: state => state.id
  },
  mutations: {
    setIsPlay: (state, isPlay) => { state.isPlay = isPlay },
    setUrl: (state, url) => { state.url = url },
    setId: (state, id) => { state.id = id }
  }
}

export default store
