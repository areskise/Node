import React from 'react';

function AddUser() {

    const handleSubmit = (event) => {
        fetch("http://localhost:5000/add-user", {
            method: 'POST',
            body: JSON.stringify({username: event.target.username.value}),
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        })
        .then((response) => response.json())
        .then((data) => console.log("data:", data));
    };

    return(
        <div>
            <form  action="/users" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;