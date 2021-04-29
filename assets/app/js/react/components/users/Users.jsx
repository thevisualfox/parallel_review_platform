/* Packages */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { SCALE_FADE } from "../../common/animations";

/* Components */
import User from "./User";

export default function Users({ users, layout = "full", ...rest }) {
    const sliceAmount = layout === "minimal" ? 7 : Infinity;

    /* Render */
    return (
        <div className="row align-items-center gutters-1">
            <AnimatePresence initial={false}>
                {users.slice(0, sliceAmount).map((user) => {
                    return (
                        <motion.div layout {...SCALE_FADE} className="col-auto" key={user.id}>
                            <User {...{ user, ...rest }} />
                        </motion.div>
                    );
                })}
                {layout === "minimal" && users.length > 7 && (
                    <motion.div layout {...SCALE_FADE} className="col-auto" key="more">
                        <p className="text--xs text-muted--70 ml-1">+ {users.length - sliceAmount}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
