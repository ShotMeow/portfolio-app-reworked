import { springTransition } from "../transitions/transition.animations";

export const fromTopAnimation = {
  initial: {
    translateY: -60,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: springTransition,
};

export const fromLeftAnimation = {
  initial: {
    translateX: -60,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: springTransition,
};

export const fromRightAnimation = {
  initial: {
    translateX: 60,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  transition: springTransition,
};

export const fromBottomAnimation = {
  initial: {
    translateY: 60,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  transition: springTransition,
};

export const heightAutoAnimation = {
  initial: {
    height: 0,
    marginTop: 0,
  },
  animate: {
    height: "auto",
    marginTop: 24,
  },
  exit: {
    height: 0,
    marginTop: 0,
  },
  style: {
    overflow: "hidden",
    marginTop: 24,
  },
};

export const fromTopAndExit = {
  initial: {
    translateY: -200,
    opacity: 0,
  },
  animate: {
    translateY: 0,
    opacity: 1,
  },
  exit: {
    translateY: -200,
    opacity: 0,
  },
};
