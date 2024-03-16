
// initial state of redux
const initialState={
    count:10,
    totalTickets:100,
    holdTickets:0,
    bookedTickets:0,
    availableTickets:100
}
export function reducer(state=initialState,action){
    
    switch(action.type){
        case "INCREMENT":
            return {...state,count:state.count+1}

            case "DECREMENT":
                return {...state,count:state.count-1}

                case "RESET":
                    return {...state,count:0}

        
        case "BOOK_TICKET":
            return {...state,availableTickets:state.availableTickets-1}
        case "HOLD_TICKED":
            return {...state,holdTickets:state.holdTickets+1}
        default:
            return state
    }

}