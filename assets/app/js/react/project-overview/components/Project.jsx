/* Packages */
import React, { useState } from "react";

/* Assets */
import starIcon from "../../../../symbols/star.svg";
import editIcon from "../../../../symbols/edit.svg";
import deleteIcon from "../../../../symbols/delete.svg";
import archiveIcon from "../../../../symbols/archive.svg";
import exitIcon from "../../../../symbols/exit.svg";

export default function Project({ slug, title, image, id, projectsSlug, deleteProject, editProject }) {
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
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="mb-0">{title}</p>
                    <ProjectMenu {...{ id, editProject, deleteProject }} />
                </div>
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

const ProjectMenu = ({ id, editProject, deleteProject }) => {
    /* State */
    const [menuOpen, setMenuOpen] = useState(false);

    /* Functions */
    const updateMenu = (event) => {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="card__menu menu">
            <button className="btn btn-link menu__dots" type="button" onClick={updateMenu}>
                <span className="menu__dot"></span>
                <span className="menu__dot"></span>
                <span className="menu__dot"></span>
            </button>
            {menuOpen && (
                <div className="menu__body">
                    <ul className="menu__list list">
                        <li className="list__item mb-2">
                            <button
                                className="btn btn-link text-white d-flex align-items-center"
                                onClick={(event) => editProject(event, id)}
                                type="button">
                                <svg className="icon icon--12 text-white mr-2">
                                    <use xlinkHref={editIcon.url}></use>
                                </svg>
                                <span className="btn-text text--sm">Edit</span>
                            </button>
                        </li>
                        <li className="list__item mb-2">
                            <button className="btn btn-link text-white d-flex align-items-center" type="button">
                                <svg className="icon icon--12 text-white mr-2">
                                    <use xlinkHref={exitIcon.url}></use>
                                </svg>
                                <span className="btn-text text--sm">Leave</span>
                            </button>
                        </li>
                        <li className="list__item mb-2">
                            <button className="btn btn-link text-white d-flex align-items-center" type="button">
                                <svg className="icon icon--12 text-white mr-2">
                                    <use xlinkHref={archiveIcon.url}></use>
                                </svg>
                                <span className="btn-text text--sm">Archive</span>
                            </button>
                        </li>
                        <li className="list__item">
                            <button
                                className="btn btn-link text-white d-flex align-items-center"
                                onClick={(event) => deleteProject(event, id)}
                                type="button">
                                <svg className="icon icon--12 text-white mr-2">
                                    <use xlinkHref={deleteIcon.url}></use>
                                </svg>
                                <span className="btn-text text--sm">Delete</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
