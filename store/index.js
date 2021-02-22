import Vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () =>{
    return new Vuex.Store({
        state: {
            students: [],
            studentItem: [],
            users: [],
            userItem: [],
            products: [],
            productItem: [],
            vehicle: [],
            vehicleItem: [],
            clients: [],
            clientItem:{}
        },
        mutations: {
            SET_STUDENT(state, students){
                state.students = students
            },
            SET_STUDENTITEM(state, studentItem){
                state.studentItem = studentItem
            },
            SET_USER(state, users){
                state.users = users
            },
            SET_USERITEM(state, userItem){
                state.userItem = userItem
            },
            SET_PRODUCT(state, products){
                state.products = products
            },
            SET_PRODUCTITEM(state, productItem){
                state.productItem = productItem
            },
            SET_VEHICLE(state, vehicle){
                state.vehicle = vehicle
            },
            SET_VEHICLEITEM(state, vehicleItem){
                state.vehicleItem = vehicleItem
            },
            SET_CLIENTS(state, clients){
                state.clients = clients
            },
            SET_CLIENTITEM(state, clientItem){
                state.clientItem = clientItem
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
            },
            getUsers({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://faker-products.herokuapp.com/users')
                    .then((resp) =>{
                        commit("SET_USER", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusUser);
                    })
                })
            },
            getUserItem({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get(`https://faker-products.herokuapp.com/users/${id}`)
                    .then((resp) =>{
                        commit("SET_USERITEM", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusUserItem);
                    })
                })
            },

            getProducts({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://faker-products.herokuapp.com/products')
                    .then((resp) =>{
                        commit("SET_PRODUCT", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusProducts);
                    })
                })
            },
            getProductItems({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get(`https://faker-products.herokuapp.com/products/${id}`)
                    .then((resp) =>{
                        commit("SET_PRODUCTITEM", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusProductItem)
                    })
                })
            },

            getVehicles({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://faker-products.herokuapp.com/vehicles')
                    .then((resp) =>{
                        commit("SET_VEHICLE", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusVehicle);
                    })
                })
            },
            getVehicleItem({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get(`https://faker-products.herokuapp.com/vehicles/${id}`)
                    .then((resp) =>{
                        commit("SET_VEHICLEITEM", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusVehicleItem);
                    })
                })
            },

            getClients({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get('https://faker-products.herokuapp.com/clients')
                    .then((resp) =>{
                        commit("SET_CLIENTS", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusClient);
                    })
                })
            },
            getClientItem({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios.get(`https://faker-products.herokuapp.com/clients/${id}`)
                    .then((resp) =>{
                        commit("SET_CLIENTITEM", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusClientItem);
                    })
                })
            }
        },
        getters: {}
    })
}