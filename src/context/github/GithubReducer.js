const githubReducer=(state,action)=>{
switch(action.type){
    case"GetUsers":
    return{
        ...state,users:action.payload,
        loading:false
    }
    case "Set_Loading":
        return{
            ...state,loading:true
        }
    case 'ClearUsers':
        return{
            ...state,users:[]
        }
        case "GetUser":
            return{
                ...state,
                user:action.load,
                loading:false
            }
    default:
        return state
}
}
export default githubReducer