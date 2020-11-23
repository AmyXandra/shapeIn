import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stage, Layer, Rect, Circle, Line, Star } from "react-konva";
import { shapeActions } from '../redux/actions';


export default function Canvas() {
    const allShapes = useSelector(state => state.shape.shapes);
    const dispatch = useDispatch();


    function drawShape(shape) {
        if (allShapes.length > 0) {
            let shapeType = shape.name;
            let shapeProp = shape.properties;

            if (shapeType == "square") {
                return (
                    <Rect
                        x={20}
                        y={50}
                        width={shapeProp.width}
                        height={shapeProp.height}
                        fill={shapeProp.fill}
                        shadowBlur={5}
                        shadowOpacity={0.01}
                        opacity={shapeProp.opacity}
                        stroke={shapeProp.stroke}
                        strokeWidth={shapeProp.strokeWidth}
                        draggable
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />)
            }
            else if (shapeType == "circle") {
                return (
                    <Circle
                        x={100}
                        y={100}
                        radius={shapeProp.radius}
                        fill={shapeProp.fill}
                        shadowBlur={5}
                        draggable
                        opacity={shapeProp.opacity}
                        shadowOpacity={0.01}
                        stroke={shapeProp.stroke}
                        strokeWidth={shapeProp.strokeWidth}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />
                )
            }
            else if (shapeType == "line") {
                return (
                    <Line
                        x={20}
                        y={200}
                        points={[0, 0, 100, 0,]}
                        closed
                        stroke="black"
                        draggable
                        opacity={shapeProp.opacity}
                        shadowOpacity={0.01}
                        strokeWidth={shapeProp.strokeWidth}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />
                )

            }
            else if (shapeType == "star") {
                return (
                    <Star
                        x={100}
                        y={100}
                        numPoints={5}
                        innerRadius={shapeProp.width / 2}
                        outerRadius={shapeProp.width}
                        fill={shapeProp.fill}
                        opacity={shapeProp.opacity}
                        draggable
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.01}
                        stroke={shapeProp.stroke}
                        strokeWidth={shapeProp.strokeWidth}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />
                )

            }
            else if (shapeType == "triangle") {
                return (
                    <Star
                        x={100}
                        y={100}
                        numPoints={3}
                        innerRadius={shapeProp.width / 2}
                        outerRadius={shapeProp.width}
                        fill={shapeProp.fill}
                        opacity={shapeProp.opacity}
                        draggable
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.01}
                        opacity={shapeProp.opacity}
                        stroke={shapeProp.stroke}
                        strokeWidth={shapeProp.strokeWidth}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />
                )
            }

            else if (shapeType == "heart") {
                return (
                    <Star
                        x={100}
                        y={100}
                        numPoints={3}
                        innerRadius={30}
                        outerRadius={60}
                        fill={shapeProp.fill}
                        opacity={shapeProp.opacity}
                        draggable
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.01}
                        stroke={shapeProp.stroke}
                        strokeWidth={shapeProp.strokeWidth}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClick={() => selectedShape(shape)}
                    />
                )
            }
        }
    }

    const handleDragStart = e => {
        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        });
    };
    const handleDragEnd = e => {
        e.target.to({
            duration: 0.5,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        });
    };

    function selectedShape(shape) {
        // stroke="black"
        dispatch(shapeActions.getSingleShape(shape))
    }

    return (
        <div className="screen-canvas">

            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {
                        allShapes.map((shape, index) => (
                            drawShape(shape)

                        ))
                    }
                </Layer>
            </Stage>

        </div>
    )
}