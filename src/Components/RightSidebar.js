import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shapeActions } from '../redux/actions';


export default function RightSidebar() {
    const singleShape = useSelector(state => state.shape.singleShape);
    const [properties, setProperties] = useState({
        id: '',
        width: '',
        height: '',
        fill: '',
        opacity: '',
        radius: ''
    });

    const dispatch = useDispatch();
    let shape_id = singleShape.id;


    useEffect(()=>{
        let dataObject = {
        fill: singleShape.name !== undefined ? singleShape.properties.fill : '#000000',
        width: singleShape.name !== undefined ? singleShape.properties.width : '0',
        height: singleShape.name !== undefined ? singleShape.properties.height : '0',
        radius: singleShape.name !== undefined ? singleShape.properties.radius : '0',
        opacity: singleShape.name !== undefined ? singleShape.properties.opacity : '1',
        }
        setProperties({...dataObject})
    }, [singleShape])

    
    const { id, width, height, fill, radius } = properties;


    const handleChange = (event) => {
        
        const { name, value } = event.target;
        setProperties(properties => ({ ...properties, [name]: value }));

        // dispatch(shapeActions.getLayers(layer))
        let real_id = singleShape.id
        dispatch(shapeActions.editShape({ ...properties, id: real_id }))
    }



    return (
        <div className="aside-wrapper2">
            <div className="property-box">
                <h4 className="property-box-title">Colors</h4>
                <ul className="colors-box-list">
                    <button className="colors-box-shape blue-color" onClick={handleChange} value="#0000ff" name="fill"></button>
                    <button className="colors-box-shape yellow-color" onClick={handleChange} value="#ffff00" name="fill"></button>
                    <button className="colors-box-shape green-color" onClick={handleChange} value="#008000" name="fill"></button>
                    <button className="colors-box-shape red-color" onClick={handleChange} value="#ff0000" name="fill"></button>
                    <button className="colors-box-shape purple-color" onClick={handleChange} value="#800080" name="fill"></button>
                    <button className="colors-box-shape pink-color" onClick={handleChange} value="#ff7b92" name="fill"></button>
                    <button className="colors-box-shape black-color" onClick={handleChange} value="#000000" name="fill"></button>
                    <button className="colors-box-shape orange-color" onClick={handleChange} value="#ffa500" name="fill"></button>
                </ul>
            </div>
            <div className="property-box">
                <h4 className="property-box-title">Width - height</h4>
                
                {singleShape.name && singleShape.name == 'square' &&
                    <div className="numbers">
                        <label for="quantity">Width:</label>
                        <input type="number" id="width" name="width" value={properties.width} onChange={handleChange} />
                    </div>
                }
                {singleShape.name && singleShape.name == 'square' &&
                    <div className="numbers">
                        <label for="quantity">Height:</label>
                        <input type="number" id="height" name="height" value={properties.height} onChange={handleChange} />
                    </div>
                }
                {singleShape.name && singleShape.name == 'circle' &&
                    <div className="numbers">
                        <label for="quantity">Radius:</label>
                        <input type="number" id="radius" name="radius" value={properties.radius} onChange={handleChange} />
                    </div>
                }
                {singleShape.name && singleShape.name == 'triangle' &&
                    <div className="numbers">
                        <label for="quantity">Size:</label>
                        <input type="number" id="width" name="width" value={properties.width} onChange={handleChange} />
                    </div>
                }
                {singleShape.name && singleShape.name == 'star' &&
                    <div className="numbers">
                        <label for="quantity">Size:</label>
                        <input type="number" id="width" name="width" value={properties.width} onChange={handleChange} />
                    </div>
                }

            </div>

            <div className="property-box">
                <h4 className="property-box-title">Fill:</h4>
                <input type="color" id="fill" name="fill" value={properties.fill} onChange={handleChange} />
                <span className="ml-2">{properties.fill}</span>
            </div>

            <div className="property-box">
                <h4 className="property-box-title">Opacity</h4>
                <div className="numbers">
                    <input type="number" id="opacity" name="opacity" min="0" step=".01" max="1" value={properties.opacity} onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}