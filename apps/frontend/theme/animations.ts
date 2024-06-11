import type { ThemeConfig } from 'tailwindcss/types/config';

export const animations: Partial<
  Pick<ThemeConfig, 'animation' | 'keyframes' | 'transitionTimingFunction'>
> = {
  animation: {
    'content-hide': 'content-hide 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'content-show': 'content-show 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'overlay-hide': 'overlay-hide 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'overlay-show': 'overlay-show 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    'slide-down-and-fade': 'slide-down-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-left': 'slide-left 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-left-and-fade': 'slide-left-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-right': 'slide-right 1s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-right-and-fade': 'slide-up-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    'slide-up-and-fade': 'slide-up-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    typing: 'typing 2.5s steps(40,end)',
  },
  keyframes: {
    'content-hide': {
      from: {
        opacity: '1',
        transform: 'translate(-50%, -50%) scale(1)',
      },
      to: {
        opacity: '0',
        transform: 'translate(-50%, -48%) scale(0.96)',
      },
    },
    'content-show': {
      from: {
        opacity: '0',
        transform: 'translate(-50%, -48%) scale(0.96)',
      },
      to: {
        opacity: '1',
        transform: 'translate(-50%, -50%) scale(1)',
      },
    },
    'overlay-hide': {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    'overlay-show': {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    'slide-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'slide-down-and-fade': {
      from: { opacity: '0', transform: 'translateY(-2px)' },
      to: { opacity: '1', transform: 'translateY(0)' },
    },
    'slide-left': {
      from: {
        transform: 'translateX(100%)',
      },
      to: {
        transform: 'translateX(0)',
      },
    },
    'slide-left-and-fade': {
      from: { opacity: '0', transform: 'translateX(2px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    'slide-right': {
      from: {
        transform: 'translateX(0%)',
      },
      to: {
        transform: 'translateX(100%)',
      },
    },
    'slide-right-and-fade': {
      from: { opacity: '0', transform: 'translateX(-2px)' },
      to: { opacity: '1', transform: 'translateX(0px)' },
    },
    'slide-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
    'slide-up-and-fade': {
      from: { opacity: '0', transform: 'translateY(2px)' },
      to: { opacity: '1', transform: 'translateY(0px)' },
    },
    typing: {
      '0%': { width: '0' },
      '100%': { width: '100%' },
    },
  },
  transitionTimingFunction: {
    'slide-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
