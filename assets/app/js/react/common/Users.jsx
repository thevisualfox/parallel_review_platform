/* Packages */
import React, { useRef, useState } from "react";
import { ReactSVG } from "react-svg";

/* Assts */
import starIcon from "icons/star.svg";
import addIcon from "icons/add.svg";

/* Components */
import Box from "./Box";

export default function Users({ users, variant = "default", showAddUser = false }) {
    /* Render */
    return (
        <div className="row gutters-2">
            {users.map(({ roles, ...rest }, userIndex) => {
                return (
                    <div key={userIndex} className="col-auto">
                        <div className={`user user--${variant}`}>
                            {roles.includes("ROLE_ADMIN") && (
                                <div className="user__leader">
                                    <ReactSVG
                                        wrapper="svg"
                                        className="icon icon--6 text-tertiary mt-0"
                                        src={starIcon}
                                    />
                                </div>
                            )}
                            <UserImage {...rest} />
                        </div>
                    </div>
                );
            })}
            {showAddUser && <UserAdd {...{ variant }} />}
        </div>
    );
}

const UserImage = ({ username, image, userColor }) => {
    const userInitials = username.split(" ").map((word) => word[0]);

    if (image) {
        return (
            <img className="user__image img-fluid rounded-circle" src={image} srcSet={`${image} 2x`} alt={username} />
        );
    }

    return (
        <span className="user__image user__image--initials rounded-circle" style={{ backgroundColor: userColor }}>
            {userInitials}
        </span>
    );
};

const UserAdd = ({ variant }) => {
    /* State */
    const [boxOpen, setBoxOpen] = useState(false);

    /* Refs */
    const formRef = useRef();

    /* Callbacks */
    const toggleBox = () => setBoxOpen(!boxOpen);

    const updateNewUsers = (event) => {
        event.preventDefault();

        // const params = new FormData(formRef.current);
    };

    /* Render */
    return (
        <div className="col-auto">
            <button className={`btn btn-link user user--${variant} user--add`} type="button" onClick={toggleBox}>
                <span className="user__image user__image--initials rounded-circle">
                    <ReactSVG wrapper="svg" className="icon icon--8 text-white mt-0" src={addIcon} />
                </span>
            </button>
            <Box header="Add users" {...{ boxOpen, toggleBox }}>
                <form ref={formRef} onSubmit={updateNewUsers}>
                    <label className="sr-only" htmlFor="addUser">
                        Add users
                    </label>
                    <input
                        type="email"
                        className="form-control form-control-sm"
                        id="addUsers"
                        name="newUser"
                        placeholder="user@domain.nl"
                        required
                        autoFocus
                    />
                </form>
            </Box>
        </div>
    );
};
