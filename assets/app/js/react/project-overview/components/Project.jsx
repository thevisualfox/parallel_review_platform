/* Packages */
import React from "react";

/* Assets */
import starIcon from "../../../../symbols/star.svg";

export default function Project({ projectsSlug, slug, title, image }) {
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
        <a href={`${projectsSlug}/${slug}`} title={title} className="card card--link card--product">
            <div className="card__image has-overlay m-2">
                <img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />
            </div>
            <div className="card-body">
                <p className="mb-3">{title}</p>
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
            </div>
        </a>
    );
}
