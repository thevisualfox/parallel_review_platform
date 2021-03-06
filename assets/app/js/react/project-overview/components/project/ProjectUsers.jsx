/* Packages */
import React from "react";
import { ReactSVG } from "react-svg";

/* Assts */
import starIcon from "icons/star.svg";

export default function ProjectUsers({ users }) {
    /* Render */
    return (
        <div className="row gutters-2">
            {users.map(({ roles, ...rest }, userIndex) => {
                return (
                    <div key={userIndex} className="col-auto">
                        <div className="user">
                            {roles.includes("ROLE_ADMIN") && (
                                <div className="user__leader">
                                    <ReactSVG wrapper="svg" className="icon icon--6 text-tertiary" src={starIcon} />
                                </div>
                            )}
                            <UserImage {...{ ...rest }} />
                        </div>
                    </div>
                );
            })}
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
