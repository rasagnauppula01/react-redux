



const initialState={
    products:[]
}

export function productReducer(state=initialState,action){
    switch(action.type){
        case "GET_PRODUCT_SUCCESS":
            return {...state,products:action.payload}

            case "ADD_NEW_PRODUCT":
            return {...state,products:[...state.products,action.payload
            //     ,{
                
            //         "id": 1,
            //         "title": "iPhone 16",
            //         "description": "An apple mobile which is nothing like apple",
            //         "price": 549,
            //         "discountPercentage": 12.96,
            //         "rating": 4.69,
            //         "stock": 94,
            //         "brand": "Apple",
            //         "category": "smartphones",
            //         "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            //         "images": [
            //             "https://cdn.dummyjson.com/product-images/1/1.jpg",
            //             "https://cdn.dummyjson.com/product-images/1/2.jpg",
            //             "https://cdn.dummyjson.com/product-images/1/3.jpg",
            //             "https://cdn.dummyjson.com/product-images/1/4.jpg",
            //             "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
            //         ]
                
            // },
        ]}

        default:
            return state
    }
}