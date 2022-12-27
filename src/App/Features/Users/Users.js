import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./userSlice";

function Users() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    const users = useSelector((state) => state.users);
    console.log(users);

    return (
        <div>
            {users.isLoading === true ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Users;
