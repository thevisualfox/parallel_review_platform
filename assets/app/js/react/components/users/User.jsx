/* Packages */
import React, {  } from "react";
import { ReactSVG } from "react-svg";

/* Assts */
import starIcon from "icons/star.svg";

export default function User({ roles, variant = "default", ...rest }) {
    /* Render */
    return (
        <div className="col-auto">
            <div className={`user user--${variant}`}>
                {roles.includes("ROLE_ADMIN") && (
                    <div className="user__leader">
                        <ReactSVG wrapper="svg" className="icon icon--6 text-tertiary mt-0" src={starIcon} />
                    </div>
                )}
                <UserImage {...rest} />
            </div>
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
