export const add_products = (products) => {
    return {
        type: "ADD_PRODUCTS",
        payload: products
    }
}

export const remove_products = (id) => {
    return {
        type: "REMOVE_PRODUCTS",
        payload: id
    }
}

export const addqnt_products = (id) => {
    //    console.warn(products)
    return {
        type: "ADDQNT_PRODUCTS",
        payload: id
    }

}

export const subqnt_products = (products) => {
    return {
        type: "SUBQNT_PRODUCTS",
        payload: products
    }
}

