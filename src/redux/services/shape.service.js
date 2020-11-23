import base_url from './base_url';

export const shapeService = {
    // createShape,
    getShape,
    editShape,
};


// function createShape(name) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({name})
//     };

//     return fetch(`http://localhost:3002/createShape`, requestOptions)
//     .then(response => response.json())
// }


function getShape() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(`http://localhost:3002/getShape`, requestOptions)
    .then(response => response.json())
}



function editShape(properties) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(properties)
    };

    return fetch(`http://localhost:3002/editShape`, requestOptions)
    .then(response => response.json())
}