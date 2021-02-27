/* Packages */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Assets */
import starIcon from "../../../../symbols/star.svg";
import editIcon from "../../../../symbols/edit.svg";
import deleteIcon from "../../../../symbols/delete.svg";
import archiveIcon from "../../../../symbols/archive.svg";
import exitIcon from "../../../../symbols/exit.svg";
import closeIcon from "../../../../symbols/close.svg";

/* Animations */
import { SCALE_FADE, STAGGER_LEFT } from "../../common/animations";

export default function Project({ slug, title, projectImages, id, deleteProject, editProject }) {
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
        <a href={`projects/${slug}`} title={title} className="card card--link card--product">
            {projectImages.slice(0, 1).map(({ image, title }, imageIndex) => (
                <div key={imageIndex} className="card__image has-overlay m-2">
                    <img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />
                </div>
            ))}
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
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
                    <ProjectMenu {...{ id, editProject, deleteProject }} />
                </div>
            </div>
        </a>
    );
}

const ProjectMenu = ({ id, editProject, deleteProject }) => {
    /* Constants */
    const MENU_ITEMS = [
        {
            name: "edit",
            icon: editIcon,
            callBack: editProject,
        },
        {
            name: "exit",
            icon: exitIcon,
            callBack: () => {},
        },
        {
            name: "archive",
            icon: archiveIcon,
            callBack: () => {},
        },
        {
            name: "delete",
            icon: deleteIcon,
            callBack: deleteProject,
        },
    ];

    /* State */
    const [menuOpen, setMenuOpen] = useState(false);

    /* Functions */
    const updateMenu = (event) => {
        event.preventDefault();
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`card__menu menu ${menuOpen && "is-active"}`}>
            <div className="menu__wrapper position-relative">
                <button className="btn btn-link position-relative" type="button" onClick={updateMenu}>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        {menuOpen ? (
                            <motion.div key="close" className="menu__dots" {...SCALE_FADE}>
                                <svg className="icon icon--14 text-white">
                                    <use xlinkHref={closeIcon.url}></use>
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.div key="dots" className="menu__dots" {...SCALE_FADE}>
                                <span className="menu__dot"></span>
                                <span className="menu__dot"></span>
                                <span className="menu__dot"></span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
                <AnimatePresence>
                    {menuOpen && (
                        <div className="menu__body">
                            <ul className="menu__list list">
                                {MENU_ITEMS.map(({ name, icon, callBack }, itemIndex) => (
                                    <motion.li
                                        key={name}
                                        className="list__item mr-2"
                                        {...STAGGER_LEFT((itemIndex + 1) * -1 + MENU_ITEMS.length + 1)}>
                                        <button
                                            className="btn btn-link text-white d-flex align-items-center"
                                            onClick={(event) => callBack(event, id)}
                                            type="button">
                                            <svg className="icon icon--16 text-white mr-2">
                                                <use xlinkHref={icon.url}></use>
                                            </svg>
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
