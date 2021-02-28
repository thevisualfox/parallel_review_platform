/* Packages */
import React from "react";

/* Assts */
import starIcon from "../../../../../symbols/star.svg";

export default function ProjectUsers() {
    /* Constants */
    const users = [
        {
            name: "bp",
            image: "https://picsum.photos/50",
            isLeader: true,
        },
    ];

    /* Render */
    return (
        <div className="row gutters-2">
            {users.map(({ name, image, isLeader }, userIndex) => {
                return (
                    <div key={userIndex} className="col-auto">
                        <div className="user">
                            {isLeader && (
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
                                alt={name}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
