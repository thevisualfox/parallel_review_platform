/* Packages */
import React from "react";
import { ReactSVG } from "react-svg";
import { useMutation, useQueryClient } from "react-query";

/* Assets */
import starIcon from "icons/star.svg";
import closeIcon from "icons/close.svg";

/* Api calls */
import { deleteUser, QUERY_KEYS } from "../../project-overview/api";

export default function User({ user, projectId, variant = "default" }) {
    /* Constants */
    const { roles, id: userId, ...rest } = user;

    const classes = {
        default: "user",
        interactive: "user user--lg",
    };

    /* Hooks */
    const queryClient = useQueryClient();

    /* Mutations */
    const deleteUserMutation = useMutation(deleteUser, {
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]),
    });

    /* Render */
    return (
        <div className="col-auto">
            <div className={classes[variant]}>
                {roles.includes("ROLE_ADMIN") && (
                    <div className="user__toggle user__toggle--leader">
                        <ReactSVG wrapper="svg" className="icon icon--6 text-tertiary mt-0" src={starIcon} />
                    </div>
                )}
                {variant === "interactive" && !roles.includes("ROLE_ADMIN") && (
                    <button
                        className="btn btn-link user__toggle user__toggle--delete"
                        type="button"
                        onClick={() => {
                            deleteUserMutation.mutate({ projectId, userId });
                        }}>
                        <ReactSVG wrapper="svg" className="icon icon--6 text-base mt-0" src={closeIcon} />
                    </button>
                )}
                <UserImage {...rest} />
            </div>
        </div>
    );
}

const UserImage = ({ username, image, userColor }) => {
    /* Constants */
    const userInitials = username.split(" ").map((word) => word[0].toUpperCase());

    /* Render */
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
