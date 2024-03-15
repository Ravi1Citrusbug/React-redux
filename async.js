const redux = require('required')
const createStore =redux.CreateStore;
const initialState = {
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS__SUCESS ="FETCH_USERS__SUCCESS" 
const FETCH_USERS__FAILURE='FETCH_USERS__FAILURE'

// const fetchUsersSucess = users =>{
//     return {
//         type:FETCH_USERS__SUCCESS,
//     }
// }
const fetchUsersSucess =users=>{
    return {
        type:FETCH_USERS__SUCESS,
        payload:users
    }
}
const fetchUsersFailure = users =>{
    return {
        type:FETCH_USERS__FAILURE,
        payload:users
    }
}

const reducer = (state = intialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {...state,loading:true}
        case FETCH_USERS__SUCCESS :
           return {
               ...state,
               loading: false,
               users: action.payload,
               error: ''
           }
        case FETCH_USERS__FAILURE:
             return {
                 ...state,
                 loading:false,
                 error: action.payload
             }

    }
}
const Store = createStore(reducer)