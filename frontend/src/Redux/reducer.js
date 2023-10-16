import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS} from "./actionTypes";

const initState={
    data:[],
    isLoading:false,
    isError:false,
}

const reducer=(state=initState,{type, payload})=>{
    switch(type){
        case DATA_REQUEST:return{...state, isLoading:true, isError:false}
        case DATA_SUCCESS:return{...state, data:payload,isLoading:false, isError:false}
        case DATA_FAILURE:return{...state, isLoading:false, isError:true}
        default:{return state}
    }
}

export {reducer}