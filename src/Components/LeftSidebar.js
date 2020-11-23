import React from 'react';
import ShapesKit from './ShapesKit';
import LayersKit from './LayersKit';

export default function LeftSidebar(){
    return(
        <div className="aside-wrapper">
            <ShapesKit/>
            <LayersKit/>
        </div>
    )
}