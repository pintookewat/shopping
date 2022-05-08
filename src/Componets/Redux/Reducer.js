const initalState = {
    Cart: [],

}

const ProductCart = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            // const indexof = state.Cart.findIndex((items) => items.id = action.payload.id)
            // if (indexof >= 0) {

            //     return {
            //         ...state,
            //         Cart: [...state.Cart]

            //     };

            // }
            return {
                ...state,
                Cart: [...state.Cart, action.payload]

            };


        case "REMOVE_PRODUCTS":


            const data = state.Cart.filter((items) => items.id !== action.payload)
            return {
                ...state,
                Cart: data
            }

        case "ADDQNT_PRODUCTS":

            let updatecard = state.Cart.map((curitems) => {

                if (curitems.id === action.payload) {
                    const cur = curitems.qnt
                    if (cur >= 5) {
                        alert("Not more then 5 products")
                        return {
                            ...curitems,
                            qnt: cur
                        };
                    } return {
                        ...curitems,
                        qnt: cur + 1
                    };


                }
                return curitems;
            });
            return {
                ...state,
                Cart: updatecard
            };

        case "SUBQNT_PRODUCTS":
            let update = state.Cart.map((curitems) => {
                if (curitems.id === action.payload) {
                    const cur = curitems.qnt;
                    if (cur <= 1) {
                        alert("Negative value not allowd")
                        return {
                            ...curitems,
                            qnt: cur,
                        }

                    }
                    return {
                        ...curitems,
                        qnt: cur - 1
                    };

                }

                return curitems;

            });
            return {
                ...state,
                Cart: update


            }
        default: return state;
    }


}
export default ProductCart;