import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import './addRoom.css';

const NewRoom = () => {

    return (
        <div className="container">
            <div className="addRoom__container">
                <div className='addRoomInfo'>
                    <div className="addRoomInfo__board">
                        <div className='addRoomInfo__board-title'>
                        <h2>Add New Room</h2>
                        </div>
                        <div className="addRoomInfo__board-table">
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default NewRoom