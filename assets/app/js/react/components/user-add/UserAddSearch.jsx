/* Packages */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "react-query";

/* Components */
import { Users, UserSelect } from "../users";

/* Animations */
import { FADE_IN } from "../../common/animations";

/* Helpers */
import { isEmail } from "../../helpers";

/* Api calls */
import { addUser, fetchGobalUsers, QUERY_KEYS } from "../../project-overview/api";

export default function UserAddSearch({ users, project }) {
    /* Queries */
    const { data: globalUsers = [] } = useQuery(QUERY_KEYS.GLOBAL_USERS, fetchGobalUsers);

    /* Hooks */
    const queryClient = useQueryClient();

    /* Mutations */
    const addUserMutation = useMutation(addUser, {
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, project.id]);
            queryClient.invalidateQueries(QUERY_KEYS.GLOBAL_USERS);
            setQuery("");
        },
    });

    /* State */
    const [query, setQuery] = useState("");
    const [focusedUser, setFocusedUser] = useState([]);

    /* Callbacks */
    const handleChange = ({ target: { value } }) => setQuery(value);

    const handleOnKeyDown = (event) => {
        if (["Enter", "Tab"].includes(event.key)) {
            event.preventDefault();

            if (focusedUser && isEmail(focusedUser.email)) {
                addUserMutation.mutate({ projectId: project.id, email: focusedUser.email });
            }

            if (isEmail(query)) {
                addUserMutation.mutate({ projectId: project.id, email: query });
            }
        }
    };

    const handleClick = (email) => {
        if (isEmail(email)) {
            addUserMutation.mutate({ projectId: project.id, email: email });
        }
    };

    /* Render */
    return (
        <div className="d-flex flex-column flex-grow-1">
            <label className="sr-only" htmlFor="userQuery">
                Search name or email
            </label>
            <input
                className="form-control form-control-sm form-control--search mb-3"
                id="userQuery"
                name="userQuery"
                placeholder="Search name or email"
                type="text"
                autoFocus
                value={query}
                onChange={handleChange}
                onKeyDown={handleOnKeyDown}
                autoComplete="off"
            />
            <div className="row gutters-3 mb-3">
                <div className="col-12">
                    <p className="text-muted--80">Current users</p>
                </div>
                <div className="col-12">
                    <Users {...{ users, project }} variant="interactive" size="xl" />
                </div>
                <div className="col-12">
                    <hr className="my-1 mx-n6" />
                </div>
                <div className="col-12">
                    <p className="text-muted--80">Add users</p>
                </div>
            </div>
            <SearchResults {...{ globalUsers, users, query, handleClick, setFocusedUser }} />
        </div>
    );
}

const SearchResults = ({ globalUsers, users, query, handleClick, setFocusedUser }) => {
    /* Constants */
    const lowerQuery = query.toLowerCase();
    const existingUsersByEmail = users.map(({ email }) => email);

    /* Only return users that are not part of the project */
    const filterDuplicates = ({ email }) => {
        return !existingUsersByEmail.includes(email);
    };

    /* Only return users that match the query on email || username */
    const filterQuery = ({ username = "", email = "" }) => {
        return email.toLowerCase().includes(lowerQuery) || username.toLowerCase().includes(lowerQuery);
    };

    /* Render filtered results */
    const filteredResults = () => {
        const filteredUsers = globalUsers.filter(filterDuplicates).filter(filterQuery);
        const newUser = { email: query, username: "New user", userColor: "#6A3F5B" };

        if (filteredUsers.length > 0) {
            return filteredUsers.splice(0, 3).map((user, userIndex) => (
                <motion.li
                    layout
                    {...FADE_IN}
                    transition={{ delay: userIndex * 0.035 }}
                    key={user.id}
                    className="list__item vr-3">
                    <UserSelect {...{ user, handleClick, setFocusedUser }} isFocused={userIndex === 0 && query} />
                </motion.li>
            ));
        }

        if (query) {
            return (
                <motion.li layout {...FADE_IN} key="New user" className="list__item is-focused vr-3">
                    <UserSelect {...{ user: newUser, handleClick }} isFocused />
                </motion.li>
            );
        }
    };

    /* Render */
    return (
        <AnimatePresence>
            <ul className="list gutters-3">{filteredResults()}</ul>
        </AnimatePresence>
    );
};
