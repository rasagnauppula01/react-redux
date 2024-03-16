


export function getProductAction(products){
    return {
        type:"GET_PRODUCT_SUCCESS",
        payload:products
    }
}
export function addNewProduct(newProduct){
    return{
        type:"ADD_NEW_PRODUCT",
        payload: newProduct
    }
}