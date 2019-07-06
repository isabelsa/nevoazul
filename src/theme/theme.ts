import { media } from './breakpoints'

export default {
  colors: {
    brand: {
      default: '#FFBC00',
    },
    background: '#FFFFFF',
    foreground: '#000000',
    beige: {
      default: '#DBCEBC',
    },
    blue: {
      default: '#B3C9C6',
    },
    brown: {
      default: '#6B665B',
      dark: '#4C463A',
    },
    green: {
      default: '#8D9678',
    },
    red: {
      default: '#DC7D67',
    },
  },
  media,
  transitions: {
    ease: (time: string = '200ms') => `${time} ease-in-out`,
    cubic: (time: string = '500ms') => `${time} cubic-bezier(0.2, 1, 0.2, 1)`,
  },
}
