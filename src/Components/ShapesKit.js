import React, { useState, useEffect } from 'react';
import {SQUAREICON, CIRCLEICON, HEARTICON, TRIANGLEICON, STARICON, LINEICON} from '../Images/Images';
import { useDispatch, useSelector } from 'react-redux';
import {shapeActions} from '../redux/actions';

export default function ShapesKit() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    function shapeCreator(name, layer) {
        dispatch(shapeActions.createShape(name, layer));
        // alert("hello")
        // dispatch(shapeActions.createLayers(layer))
    }
    return (

        <div className="property-box">
            <h4 className="property-box-title">Shapes</h4>
            <div>
                <ul className="shape-box-list">
                    <li className="shape-box-shape"onClick={()=> shapeCreator('square', {name: 'Square', shape: 'SQUAREICON'} )}><SQUAREICON/></li>
                    <li className="shape-box-shape"onClick={()=> shapeCreator('circle', {name: 'Circle', shape: 'CIRCLEICON'} )}><CIRCLEICON/></li>
                    {/* <li className="shape-box-shape"onClick={()=> shapeCreator('heart', {name: 'Heart', shape: 'HEARTICON'} )}><HEARTICON/></li> */}
                    <li className="shape-box-shape"onClick={()=> shapeCreator('triangle', {name: 'Triangle', shape: 'TRIANGLEICON'} )}><TRIANGLEICON/></li>
                    <li className="shape-box-shape"onClick={()=> shapeCreator('star', {name: 'Star', shape: 'STARICON'} )}><STARICON/></li>
                    {/* <li className="shape-box-shape"onClick={()=> shapeCreator('line', {name: 'Line', shape: 'LINEICON'} )}><LINEICON/></li> */}
                </ul>
            </div>
        </div>

    )
}