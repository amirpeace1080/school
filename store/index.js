import Vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () =>{
    return new Vuex.Store({
        state: {
            students: [],
            studenItem: [],
            users: []
        },
        mutations: {
            SET_STUDENT(state, students){
                state.students = students
            },
            SET_STUDENTITEM(state, studentItem){
                state.studenItem = studentItem
            },
            SET_USER(state, users){
                state.users = users
            }
        },
        actions: {
            getStudent({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://14a5c6ab-5878-4d1b-a1a5-1c3e8876d94d.mock.pstmn.io/?us=pas')
                    .then((resp)=>{
                        commit("SET_STUDENT", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusStudent);
                    })
                })
            },
            getStudentItem({commit}, {id}){
                return new Promise((resolve, reject)=>{
                    this.$axios.get(`https://14a5c6ab-5878-4d1b-a1a5-1c3e8876d94d.mock.pstmn.io/?us=pas/${id}`)
                    .then((resp)=>{
                        commit("SET_STUDENTITEM", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusStudentItem);
                    })
                })
            },
            getUsers({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://ab90ce5e-f5ac-4cf7-805e-54becaa0c516.mock.pstmn.io/?usr=pas')
                    .then((resp) =>{
                        commit("SET_USER", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusUser);
                    })
                })
            }
        },
        getters: {}
    })
}