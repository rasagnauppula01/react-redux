
// const action={
//     type:"INCREMENT"
// }

// action creator:
// it is a function which returns the action

export function incrementAction(){
    const action={
        type: "INCREMENT"
    }
    return action
}

export function decrementAction(){
    const action={
        type: "DECREMENT"
    }
    return action
}

export function resetAction(){
    const action={
        type: "RESET"
    }
    return action
}