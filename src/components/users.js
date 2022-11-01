import React, { useState, useEffect } from 'react';

function User() {
    const [users, setUsers] = useState([]);
    useEffect(() => { 
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const userList = () => {
        if(users.length > 0) {
            
            return(
                <div>
                    <ul>
                        { users.map((user) => {
                            return(
                                <li>{user.username}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <h1>No Users Found!</h1>
            );
        };
    };

    return(
        <div>
            <h1>Users</h1>
            {userList()}
        </div>
    );
};

export default User;