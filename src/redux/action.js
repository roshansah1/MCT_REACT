
export const getProduct = (product) => {
    return {
        type : "product details",
        payload : product
    } 
}

export const removeProduct = () => {
    return {
        type : "remove product"
    }
}

export const getUsers = (users) => {
    return{
      type : "users data",
      payload: users
    }
}

export const getFilteredUsers = (users) => {
    return{
      type : "filtered users data",
      payload: users
    }
}

export const protectedData = (data) => {
    return{
        type: "protected components",
        payload: data
    }
}