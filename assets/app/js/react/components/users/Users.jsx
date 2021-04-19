/* Packages */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { SCALE_FADE } from "../../common/animations";

/* Components */
import User from "./User";

export default function Users({ users, ...rest }) {
    /* Render */
    return (
        <div className="row gutters-1">
            <AnimatePresence initial={false}>
                {users.map((user) => {
                    return (
                        <motion.div layout {...SCALE_FADE} className="col-auto" key={user.id}>
                            <User {...{ user, ...rest }} />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
