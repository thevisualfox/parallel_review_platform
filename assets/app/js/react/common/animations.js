const EASE = [0.65, 0, 0.35, 1];

const FADE_IN = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        ease: EASE,
    },
};

const TRANSFORM_UP = {
    initial: {
        y: "100%",
    },
    animate: {
        y: "0%",
        transition: {
            type: "spring",
            damping: 41,
            stiffness: 600,
        },
    },
    exit: {
        y: "100%",
        transition: {
            type: "spring",
            damping: 41,
            stiffness: 1200,
        },
    },
};

const SCALE_FADE = {
    initial: {
        scale: 0.5,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
    },
    exit: {
        scale: 0.5,
        opacity: 0,
    },
    transition: {
        ease: EASE,
        duration: 0.1,
    },
};

const STAGGER_UP = (index = 0) => ({
    initial: { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 450, delay: index * 0.035 } },
    exit: { opacity: 0, scale: 0.25, transition: { type: "spring", damping: 30, stiffness: 600 } },
});

const STAGGER_LEFT = (index = 0) => ({
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 300, delay: index * 0.035 } },
    exit: { opacity: 0, x: 10, transition: { type: "spring", damping: 30, stiffness: 600 } },
});

export { FADE_IN, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT };
