/* Packages */
import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";

/* Assets */
import addUserIcon from "icons/add_user.svg";

/* Components */
import { UserAvatar, UserInfo } from "./User";

export default function UserSelect({ user, handleClick, isFocused, setFocusedUser }) {
    /* Effects */
    useEffect(() => {
        isFocused && setFocusedUser(user);
    }, [isFocused]);

    /* Callbacks */
    const handleStatus = (action) => {
        setFocusedUser(action === "enter" ? user : null);
    };

    /* Render */
    return (
        <button
            className={`user user--select ${isFocused && "is-focused"} user--xl`}
            onClick={() => handleClick(user.email)}
            onMouseEnter={() => handleStatus("enter")}
            onMouseLeave={() => handleStatus("leave")}>
            <div className="d-flex align-items-center">
                <UserAvatar {...user} />
                <UserInfo {...user} />
                <div className="user__add rounded-circle ml-auto">
                    <ReactSVG wrapper="svg" className="user__add-icon icon icon--12 text-white" src={addUserIcon} />
                </div>
            </div>
        </button>
    );
}
