import React, {useState, useEffect} from 'react';
import Canvas from './Canvas';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Header from './Header';


export default function AppLayout() {
    const database = {
        shapes: [],
        layers: [],
        properties: {
            width:'100', 
            height:'100', 
            fill:'#1B61E4',
            radius:'75',
            opacity:'1',
            createdAt: new Date(),
            stroke:'#000000',
            strokeWidth:'0'
        }
            
    };
    useEffect(()=>{
        localStorage.setItem('database', JSON.stringify(database));
    });

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