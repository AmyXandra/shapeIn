import { shapeService } from '../services';

export const shapeActions = {
    getShape,
    createShape,
    createLayers,
    editShape,
    getSingleShape,
    deleteShape,
};

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};



function getShape() {
    return dispatch => {
        shapeService.getShape()
            .then(
                get_shape => {
                    dispatch(success(get_shape));
                },
        );
    };

    function success(get_shape) { return { type: "GETSHAPE", get_shape } }
}


function createShape(name, layer) {
    return dispatch => {
        const create_shape = JSON.parse(localStorage.getItem('database'));
        let something = ID()
        let newShape = {
            id: something,
            name: name,
            properties: create_shape.properties
        } 
        create_shape.shapes.push({
            id: something,
            name: name,
            properties: create_shape.properties
        })
        localStorage.setItem('database', JSON.stringify(create_shape));
        dispatch(success(newShape));
        dispatch(createLayers(layer, something))
    };

    function success(create_shape) { return { type: "CREATESHAPE", create_shape } }
}




function deleteShape(id) {
    return dispatch => {
        const delete_shape = JSON.parse(localStorage.getItem('database'));

        dispatch(success(id));
        dispatch(successLayer(id));

        delete_shape.shapes.splice(delete_shape.shapes.findIndex(e => e.id === id),1);
        delete_shape.layers.splice(delete_shape.layers.findIndex(e => e.id === id),1);
        
        localStorage.setItem('database', JSON.stringify(delete_shape));
        
    };

    function success(delete_shape) { return { type: "DELETESHAPE", delete_shape } }
    function successLayer(delete_layer) { return { type: "DELETELAYER", delete_layer } }
}



function createLayers(layer, something) {
    return dispatch => {
        const create_layer = JSON.parse(localStorage.getItem('database'));
        
        create_layer.layers.push({
            ...layer, id: something
        })
        localStorage.setItem('database', JSON.stringify(create_layer));
        dispatch(success({...layer, id: something}));
    };

    function success(create_layer) { return { type: "CREATELAYERS", create_layer } }
}



function getSingleShape(shape) {
    return dispatch => {
        dispatch({ type: "GETSINGLESHAPE_REQUEST", shape });
    };
}




function editShape(properties) {
    return dispatch => {
        const edit_shape = JSON.parse(localStorage.getItem('database'));
        let found = false;
        edit_shape.shapes.forEach(shape => {
            if (shape.id === properties.id) {
                found = true;
                shape.properties = {
                    width: properties.width ? properties.width : shape.properties.width,
                    height: properties.height ? properties.height : shape.properties.height,
                    fill: properties.fill ? properties.fill : shape.properties.fill,
                    radius: properties.radius ? properties.radius : shape.properties.radius,
                    opacity: properties.opacity ? properties.opacity : shape.properties.opacity,
                }
                
                localStorage.setItem('database', JSON.stringify(edit_shape));
                dispatch(success(shape));
            }
        })
        
    };

    function success(edit_shape) { return { type: "EDITSHAPE", edit_shape } }
}



