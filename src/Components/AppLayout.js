import React, {useState, useEffect} from 'react';
import Canvas from './Canvas';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Header from './Header';


export default function AppLayout() {
    
    return (
        <div>
            <Header />
            <div className="grid-container">
                <div className="grid-item"><LeftSidebar /></div>
                <div className="grid-item"><Canvas /></div>
                <div className="grid-item"><RightSidebar /></div>
            </div>
        </div>
    )
}