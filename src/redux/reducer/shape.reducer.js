let init = {
    shapes: [],
    layers: [],
    singleShape: {},
}

export function shape(state = init, action) {
    switch (action.type) {

        case "GETSHAPE":
            return {
                ...state,
                shapes: action.get_shape
            };
        


        case "CREATESHAPE":
            return {
                ...state,
                shapes: state.shapes.concat(action.create_shape)
            };

            
            
        case "CREATELAYERS":
            return {
                ...state,
                layers: state.layers.concat(action.create_layer)
            };


            
        case "EDITSHAPE":
            return {
                ...state,
                // shapes: action.edit_shape,
                shapes: state.shapes.map(shape => {
                    if (shape.id === action.edit_shape.id) {
                        return {
                            ...shape,
                            ...action.edit_shape,
                          };
                        
                    }

                    return shape;
                })
            };    
        


        case "GETSINGLESHAPE_REQUEST":
            return {
                ...state,
                singleShape: action.shape
            };


        case "DELETESHAPE":
            // remove deleted user from state
            return {
                ...state,
                shapes: state.shapes.filter(shape => shape.id !== action.delete_shape)
            };
        
        case "DELETELAYER":
            // remove deleted user from state
            return {
                ...state,
                layers: state.layers.filter(layer => layer.id !== action.delete_layer)
            };

        default:
            return state
    }
}