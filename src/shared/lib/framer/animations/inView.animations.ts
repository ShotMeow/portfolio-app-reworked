import { springTransition } from "../transitions/transition.animations";

export const inViewFromTopAnimation = {
  initial: {
    translateY: -60,
    opacity: 0,
  },
  whileInView: {
    translateY: 0,
    opacity: 1,
  },
  viewport: {
    once: true,
  },
  transition: springTransition,
};

export const inViewFromLeftAnimation = {
  initial: {
    translateX: -60,
    opacity: 0,
  },
  whileInView: {
    translateX: 0,
    opacity: 1,
  },
  viewport: {
    once: true,
  },
  transition: springTransition,
};

export const inViewFromRightAnimation = {
  initial: {
    translateX: 60,
    opacity: 0,
  },
  whileInView: {
    translateX: 0,
    opacity: 1,
  },
  viewport: {
    once: true,
  },
  transition: springTransition,
};

export const inViewFromBottomAnimation = {
  initial: {
    translateY: 60,
    opacity: 0,
  },
  whileInView: {
    translateY: 0,
    opacity: 1,
  },
  viewport: {
    once: true,
  },
  transition: springTransition,
};
