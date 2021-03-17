/* Packages */
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { useMutation } from "react-query";

/* Assts */
import addIcon from "icons/add.svg";

/* Components */
import { Box } from "../../common";

/* Helpers */
import { isEmail } from "../../helpers";

/* Api calls */
import { addUser } from "../../project-overview/api";

export default function UserAdd({ variant }) {
    /* Hooks */
    const addUserMutation = useMutation(addUser);

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
                addUserMutation.mutate({ email: value });
                setValue("");
            }
        }
    };

    /* Render */
    return (
        <div className="position-relative ml-2">
            <button className={`btn btn-link user user--${variant} user--add`} type="button" onClick={toggleBox}>
                <span className="user__image user__image--initials rounded-circle">
                    <ReactSVG wrapper="svg" className="icon icon--8 text-white mt-0" src={addIcon} />
                </span>
            </button>
            <Box header="Share with someone" {...{ boxOpen, toggleBox }}>
                <label className="sr-only" htmlFor="addUser">
                    Add users
                </label>
                <input
                    className="form-control form-control-sm form-control--clear"
                    id="newUsers"
                    name="newUsers"
                    placeholder="user@domain.com"
                    type="email"
                    autoFocus
                    {...{ value, onChange, onKeyDown }}
                />
            </Box>
        </div>
    );
}