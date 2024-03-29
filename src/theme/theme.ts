export default {
  colors: {
    brand: {
      default: '#FFBC00',
    },
    background: '#FFFFFF',
    foreground: '#000000',
    beige: {
      default: '#DBCEBC',
      light: '#EFEBE6',
      lighter: '#FFFBF3',
    },
    blue: {
      light: '#D5E1DF',
      default: '#B3C9C6',
    },
    brown: {
      default: '#6B665B',
      dark: '#4C463A',
    },
    green: {
      default: '#8D9678',
    },
    greyscale: {
      light: '#EBEDEF',
    },
    red: {
      default: '#DC7D67',
    },
  },
  fonts: {
    serif: 'Copernicus',
  },
  transitions: {
    ease: (time: string = '300ms') => `${time} ease`,
    cubic: (time: string = '500ms') => `${time} cubic-bezier(0.2, 1, 0.2, 1)`,
  },
}
