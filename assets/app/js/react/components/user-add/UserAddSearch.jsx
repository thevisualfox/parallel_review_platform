/* Packages */
import React from "react";
import { useQuery } from "react-query";

/* Api calls */
import { fetchGobalUsers, QUERY_KEYS } from "../../project-overview/api";
import { Users } from "../users";

export default function UserAddSearch({ users, project }) {
    /* Queries */
    const { data: globalUsers = [] } = useQuery(QUERY_KEYS.GLOBAL_USERS, fetchGobalUsers);

    return (
        <div className="d-flex flex-column flex-grow-1">
            <label className="sr-only" htmlFor="userQuery">
                Search name or email
            </label>
            <input
                className="form-control form-control--search"
                id="userQuery"
                name="userQuery"
                placeholder="Search name or email"
                type="text"
                autoFocus
            />
            <div className="row gutters-3 mt-4">
                <div className="col-12">
                    <p className="text-muted--80">Added users</p>
                </div>
                <div className="col-12">
                    <Users {...{ users, project }} variant="interactive" size="xl" />
                </div>
                <div className="col-12">
                    <hr className="my-1" />
                </div>
                <div className="col-12">
                    <p className="text-muted--80">All users</p>
                </div>
                {globalUsers.map(({ id, username, email }) => (
                    <div key={id} className="col-12 d-flex">
                        {username} {email}
                    </div>
                ))}
            </div>
        </div>
    );
}
