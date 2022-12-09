import React, { useState } from 'react';
import axios from '../../utils/axios';
import './addHotel.css';
import { useNavigate } from 'react-router-dom';

const AddHotel = () => {
    const [error, setError] = useState(false);
    const [formValues, setFormValues] = useState({});
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(formValues));
        if(!error) {
            console.log(formValues);
            axios.post('/add-hotel', formValues)
                .then(res => {
                    navigate('/hotels');
                })
                .catch(err => console.log(err));
        }
    };

    const validate = (values) => {
        if(!values.name || !values.city || !values.type || !values.rooms || !values.address || !values.distance || !values.photos || !values.title || !values.desc || !values.featured || !values.cheapestPrice) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="container">
            <div className="addRoom__container">
                <div className='addRoomInfo'>
                    <div className="addRoomInfo__board">
                        <div className='addRoomInfo__board-title'>
                        <h2>Add New Hotel</h2>
                        </div>
                        <div className="addRoomInfo__board-table">
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='form-control'>
                                <div className='input-label'>
                                    <label htmlFor="">Name</label>
                                </div>
                                <input type="text" name="name" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className='input-label'>
                                    <label htmlFor="">Type</label>
                                </div>
                                <input type="text" name="type" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className='input-label'>
                                    <label htmlFor="">City</label>
                                </div>
                                <input type="text" name="city" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Address</label>
                                </div>
                                <input type="text" name="address" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Distance From City Center</label>
                                </div>
                                <input type="number" name="distance" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Title</label>
                                </div>
                                <input type="text" name="title" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Description</label>
                                </div>
                                <input type="text" name="desc" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Price</label>
                                </div>
                                <input type="number" name="cheapestPrice" onChange={handleChange}/>
                            </div>
                            <div className='form-control'>
                                <div className="input-label">
                                    <label htmlFor="">Featured</label>
                                </div>
                                <select name="featured" id="featured" onChange={handleChange}>
                                        <option hidden >Select NO or YES </option>
                                        <option value={false}>NO</option>
                                        <option value={true}>YES</option>
                                </select>
                            </div>
                            <div className='form-control-room'>
                                <div className="input-label">
                                    <label htmlFor="">Images</label>
                                </div>
                                <textarea name="photos" id="photos" cols="20" rows="3"
                                    placeholder="Give comma between link images."
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='form-control-room'>
                                <div className="input-label">
                                    <label htmlFor="">Rooms</label>
                                </div>
                                <textarea name="rooms" id="rooms" cols="20" rows="3"
                                    placeholder="Give comma between rooms title."
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='form-control'>
                                <button className="add-button" type="submit">Add Hotel</button> 
                            </div>
                        </form>
                        </div>
                        <div className="error">
                            {error && <span className="error">Must Enter All Information!</span>}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default AddHotel