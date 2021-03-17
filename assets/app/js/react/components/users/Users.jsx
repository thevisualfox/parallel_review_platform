/* Packages */
import React from "react";

/* Components */
import User from "./User";

export default function Users({ users, variant = "default" }) {
    /* Render */
    return (
        <div className="row gutters-2">
            {users.map((user, userIndex) => {
                return <User key={userIndex} {...{ ...user, variant }} />;
            })}
        </div>
    );
}
