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
                    this.$axios.get('https://2d5e6262-78bd-46f9-8534-e9b2ef96451a.mock.pstmn.io/?user=pass')
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
                    this.$axios.get(`https://faker-products.herokuapp.com/students/${id}`)
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
                    this.$axios.get('https://2d5e6262-78bd-46f9-8534-e9b2ef96451a.mock.pstmn.io/?user=pass')
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