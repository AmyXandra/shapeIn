import React from 'react';
import { SQUAREICON, CIRCLEICON, HEARTICON, TRIANGLEICON, STARICON, LINEICON } from '../Images/Images';
import { useDispatch, useSelector } from 'react-redux';
import { shapeActions } from '../redux/actions';


export default function LayersKit() {
    const layers = useSelector(state => state.shape.layers);
    const dispatch = useDispatch();

    function handleRemoveShape(layer) {
        let id = layer.id;
        dispatch(shapeActions.deleteShape(id))
    };

    function checkShapeIcon(shape) {
        switch (shape) {
            case "SQUAREICON":
                return <SQUAREICON />;

            case "CIRCLEICON":
                return <CIRCLEICON />;

            case "STARICON":
                return <STARICON />;

            case "LINEICON":
                return <LINEICON />;

            case "TRIANGLEICON":
                return <TRIANGLEICON />;

            case "HEARTICON":
                return <HEARTICON />;

            default:
                break;
        }
    }

    return (

        <div className="property-box">
            <h4 className="property-box-title">Layers</h4>
            <ul className="layer-group">
                {layers && layers.map(layer => (

                    <div className="d-flex justify-content-between">
                        <li className="layer-list">
                            <div className="layer-icon">{checkShapeIcon(layer.shape)}</div> <span>{layer.name}</span>
                        </li>

                        <button
                            className="btn btn-link"
                            type="button"
                            onClick={() => handleRemoveShape(layer)}
                        >
                            -
                        </button>
                    </div>

                ))}
            </ul>
        </div>

    )
}