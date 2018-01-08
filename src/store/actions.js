import http from 'axios'
export default {
    getData ({commit}) {
        return http.get('http://localhost:8081/data')
        .then(res => {
            commit('GET_DATA',res.data)
        })
    },
    getType ({commit}) {
        return http.get('http://localhost:8081/data2')
        .then(res => {
            // console.log(res.data)
            commit('GET_TYPE',res.data)
        })
    }
}