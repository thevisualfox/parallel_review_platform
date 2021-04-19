/* Packages */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "react-query";

/* Animations */
import { FADE_IN } from "../../common/animations";

/* Components */
import { UserSelect } from "../users";

/* Api calls */
import { fetchGobalUsers, QUERY_KEYS } from "../../project-overview/api";

export default function UserAddSearchResults({
    users,
    query,
    handleClick,
    focusedUser,
    setFocusedUser,
    userMutationLoading,
}) {
    /* Queries */
    const { data: globalUsers = [], isLoading: globalUsersLoading } = useQuery(
        QUERY_KEYS.GLOBAL_USERS,
        fetchGobalUsers
    );

    /* Constants */
    const lowerQuery = query.toLowerCase();
    const existingUsersByEmail = users.map(({ email }) => email);

    const filterUsers = (users) => {
        let filteredUsers = users
            .filter(({ email }) => {
                /* Only return users that are not part of the project */
                return !existingUsersByEmail.includes(email);
            })
            .filter(({ email, username }) => {
                /* Only return users that match the query on email || username */
                return email.toLowerCase().includes(lowerQuery) || username.toLowerCase().includes(lowerQuery);
            });

        if (filteredUsers.length > 0 && !userMutationLoading) {
            setFocusedUser(filteredUsers[0]);
        }

        return filteredUsers;
    };

    /* Render filtered results */
    const filteredResults = () => {
        const filteredUsers = filterUsers(globalUsers);
        const newUser = { email: query, username: "New user", userColor: "#6A3F5B" };

        if (filteredUsers.length > 0) {
            return filteredUsers.map((user) => (
                <motion.li {...FADE_IN} key={user.id} className="list__item vr-3">
                    <UserSelect
                        {...{ user, handleClick, setFocusedUser }}
                        isFocused={user.email === focusedUser?.email && query}
                    />
                </motion.li>
            ));
        }

        if (!globalUsersLoading) {
            return (
                <motion.li {...FADE_IN} key="New user" className="list__item is-focused vr-3">
                    <UserSelect {...{ user: newUser, handleClick, setFocusedUser }} isFocused={query.length} />
                </motion.li>
            );
        }
    };

    /* Render */
    return (
        <AnimatePresence>
            {query && (
                <motion.ul {...FADE_IN} className="box__list list">
                    {filteredResults()}
                </motion.ul>
            )}
        </AnimatePresence>
    );
}
