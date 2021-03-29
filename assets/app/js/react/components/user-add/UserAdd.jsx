/* Packages */
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useMutation, useQueryClient } from "react-query";

/* Assets */
import addIcon from "icons/add.svg";

/* Components */
import { Box } from "../../common";
import UserAddSearch from "./UserAddSearch";

/* Helpers */
import { isEmail } from "../../helpers";

/* Api calls */
import { addUser, QUERY_KEYS } from "../../project-overview/api";

export default function UserAdd({ users, project }) {
    /* Hooks */
    const queryClient = useQueryClient();

    /* Mutations */
    const addUserMutation = useMutation(addUser, {
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, project.id]);
            setValue("");
        },
    });

    /* State */
    const [boxOpen, setBoxOpen] = useState(false);
    const [value, setValue] = useState("");

    /* Callbacks */
    const toggleBox = () => setBoxOpen(!boxOpen);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onKeyDown = (event) => {
        if (["Enter", "Tab"].includes(event.key)) {
            event.preventDefault();

            if (isEmail(value)) {
                addUserMutation.mutate({ projectId: project.id, email: value });
            }
        }
    };

    /* Render */
    return (
        <div className="position-relative ml-2">
            <button className="btn btn-link user user--lg user--add" type="button" onClick={toggleBox}>
                <span className="user__avatar user__avatar--initials rounded-circle">
                    <ReactSVG wrapper="svg" className="icon icon--8 text-white mt-0" src={addIcon} />
                </span>
            </button>
            <Box header="Select users" content="Choose some users to collaborate with." {...{ boxOpen, toggleBox }}>
                <UserAddSearch {...{ users, project }} />
            </Box>
        </div>
    );
}
