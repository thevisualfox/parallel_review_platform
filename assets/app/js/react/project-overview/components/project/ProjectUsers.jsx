/* Packages */
import React from "react";

/* Assts */
import starIcon from "../../../../../symbols/star.svg";

export default function ProjectUsers({ users }) {
    /* Render */
    return (
        <div className="row gutters-2">
            {users.map(({ username, image = "https://picsum.photos/50", roles }, userIndex) => {
                return (
                    <div key={userIndex} className="col-auto">
                        <div className="user">
                            {roles.includes("ROLE_ADMIN") && (
                                <div className="user__leader">
                                    <svg className="icon icon--6 text-tertiary">
                                        <use xlinkHref={starIcon.url}></use>
                                    </svg>
                                </div>
                            )}
                            <img
                                className="user__image img-fluid rounded-circle"
                                src={image}
                                srcSet={`${image} 2x`}
                                alt={username}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
