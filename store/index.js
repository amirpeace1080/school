import Vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () =>{
    return new Vuex.Store({
        state: {
            students: [],
            studenItem: []
        },
        mutations: {
            SET_STUDENT(state, students){
                state.students = students
            },
            SET_STUDENTITEM(state, studentItem){
                state.studenItem = studentItem
            }
        },
        actions: {
            getStudent({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://faker-products.herokuapp.com/students')
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
            }
        },
        getters: {}
    })
}