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

const FADE_IN_UP = {
    initial: {
        opacity: 0,
        y: 35,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 35,
    },
    transition: {
        ease: EASE,
    },
};

const STAGGER_UP = (index) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { ease: [0.65, 0, 0.35, 1], delay: index ? index * 0.035 : 0 } },
    exit: { opacity: 0, y: -25, transition: { ease: [0.65, 0, 0.35, 1] } },
});

export { FADE_IN, FADE_IN_UP, STAGGER_UP };