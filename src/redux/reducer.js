

// initial state of redux
const initialState={
    count:10
}
export function reducer(state=initialState,action){
    
    switch(action.type){
        case "INCREMENT":
            return {...state,count:state.count+1}
        default:
            return state
    }

}