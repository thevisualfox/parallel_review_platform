/* Packages */
import React from "react";

/* Components */
import User from "./User";

export default function Users({ users, ...rest }) {
    /* Render */
    return (
        <div className="row gutters-1">
            {users.map((user, userIndex) => {
                return <User key={userIndex} {...{ user, ...rest }} />;
            })}
        </div>
    );
}
