import { Theme } from './types'

export enum FONT_FAMILY {
  BOLD = 'DMSans_700Bold',
  REGULAR = 'DMSans_400Regular',
  MEDIUM = 'DMSans_500Medium',
}

export enum FONT_WEIGHT {
  NORMAL = 'normal',
  BOLD = 'bold',
  W100 = '100',
  W200 = '200',
  W300 = '300',
  W400 = '400',
  W500 = '500',
  W600 = '600',
  W700 = '700',
  W800 = '800',
  W900 = '900',
}

export enum FONT_SIZE {
  TINY = 14,
  SMALL = 16,
  NORMAL = 18,
  LARGE = 20,
  HUGE = 22,
  GIANT = 24,
}

export enum PRIMARY_COLOR {
  P100 = '#DFD8F7',
  P200 = '#BFB3EF',
  P300 = '#9182D1',
  P400 = '#6356A3',
  P500 = '#302666',
  P600 = '#241B57',
  P700 = '#191349',
  P800 = '#110C3B',
  P900 = '#0B0730',
  LIGHT = '#DFD8F7',
  MAIN = '#302666',
  DARK = '#0B0730',
}

export enum SECONDARY_COLOR {
  P100 = '#D3F7FF',
  P200 = '#A8EBFF',
  P300 = '#7DD9FF',
  P400 = '#5DC7FF',
  P500 = '#27a8ff',
  P600 = '#1C83DB',
  P700 = '#1362B7',
  P800 = '#0C4593',
  P900 = '#07317A',
  LIGHT = '#D3F7FF',
  MAIN = '#27a8ff',
  DARK = '#07317A',
}

export enum ALTERNATIVE_COLOR {
  ALT1 = '#ffdec9',
  ALT2 = '#ffb89e',
  ALT3 = '#ff9168',
  ALT4 = '#27A8FF',
  ALT5 = '#ff9168',
  ALT6 = '#ffba5f',
  ALT7 = '#ff4378',
  ALT8 = '#E84F92',
  ALT9 = '#29CCB1',
  ALT10 = '#FF6428',
  ALT11 = '#FFB800',
  ALT12 = '#6D7878',
}

export const RANDOM_COLORS: string[] = [
  '#FF6428',
  '#01CEAA',
  '#9B00AF',
  '#FFB800',
  '#675CFF',
  '#F98939',
  '#E84F92',
  '#212C4C',
  '#5C4D7C',
  '#2E33A9',
  '#86AA59',
]

export enum STATUS_COLOR {
  INFO = '#3e96d1',
  DANGER = '#F45C3A',
  ERROR = '#F45C3A',
  SUCCESS = '#50d174',
  WARNING = '#ffb800',
}

export const theme: Theme = {
  borderRadius: 4,
  typography: {
    fontWeight: {
      normal: FONT_WEIGHT.NORMAL,
      bold: FONT_WEIGHT.BOLD,
      100: FONT_WEIGHT.W100,
      200: FONT_WEIGHT.W200,
      300: FONT_WEIGHT.W300,
      400: FONT_WEIGHT.W400,
      500: FONT_WEIGHT.W500,
      600: FONT_WEIGHT.W600,
      700: FONT_WEIGHT.W700,
      800: FONT_WEIGHT.W800,
      900: FONT_WEIGHT.W900,
    },
    fontSize: {
      tiny: FONT_SIZE.TINY,
      small: FONT_SIZE.SMALL,
      normal: FONT_SIZE.NORMAL,
      large: FONT_SIZE.LARGE,
      huge: FONT_SIZE.HUGE,
      giant: FONT_SIZE.GIANT,
    },
    fontFamily: {
      regular: FONT_FAMILY.REGULAR,
      medium: FONT_FAMILY.MEDIUM,
      bold: FONT_FAMILY.BOLD,
    },
  },
  palette: {
    white: '#FFFFFF',
    black: '#1A1A1A',
    shadow: 'rgba(0, 0, 0, 0.25)',
    shadowLight: '#919191',
    border: '#DFDFDA',
    ripple: '#d1d1d1',
    background: '#F8F8F6',
    text: '#1A1A1A',
    textLight: '#6D7878',
    tooltip: 'rgba(26, 26, 26, 0.9)',
    info: STATUS_COLOR.INFO,
    warning: STATUS_COLOR.WARNING,
    error: STATUS_COLOR.ERROR,
    success: STATUS_COLOR.SUCCESS,
    onSurface: '#1A1A1A',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onBackground: '#1A1A1A',
    onBackgroundSecondary: '#6D7878',
    // disabled: string;
    // placeholder: string;
    // backdrop: string;
    status: {
      info: STATUS_COLOR.INFO,
      danger: STATUS_COLOR.DANGER,
      success: STATUS_COLOR.SUCCESS,
      warning: STATUS_COLOR.WARNING,
    },
    surface: {
      s100: '#F5F7F7',
      s200: '#e9e9e9',
      s300: '#d3d3d3',
    },
    primary: {
      p100: PRIMARY_COLOR.P100,
      p200: PRIMARY_COLOR.P200,
      p300: PRIMARY_COLOR.P300,
      p400: PRIMARY_COLOR.P400,
      p500: PRIMARY_COLOR.P500,
      p600: PRIMARY_COLOR.P600,
      p700: PRIMARY_COLOR.P700,
      p800: PRIMARY_COLOR.P800,
      p900: PRIMARY_COLOR.P900,
      light: PRIMARY_COLOR.LIGHT,
      main: PRIMARY_COLOR.MAIN,
      dark: PRIMARY_COLOR.DARK,
    },
    secondary: {
      p100: SECONDARY_COLOR.P100,
      p200: SECONDARY_COLOR.P200,
      p300: SECONDARY_COLOR.P300,
      p400: SECONDARY_COLOR.P400,
      p500: SECONDARY_COLOR.P500,
      p600: SECONDARY_COLOR.P600,
      p700: SECONDARY_COLOR.P700,
      p800: SECONDARY_COLOR.P800,
      p900: SECONDARY_COLOR.P900,
      light: SECONDARY_COLOR.LIGHT,
      main: SECONDARY_COLOR.MAIN,
      dark: SECONDARY_COLOR.DARK,
    },
    alternatives: {
      alt1: ALTERNATIVE_COLOR.ALT1,
      alt2: ALTERNATIVE_COLOR.ALT2,
      alt3: ALTERNATIVE_COLOR.ALT3,
      alt4: ALTERNATIVE_COLOR.ALT4,
      alt5: ALTERNATIVE_COLOR.ALT5,
      alt6: ALTERNATIVE_COLOR.ALT6,
      alt7: ALTERNATIVE_COLOR.ALT7,
      alt8: ALTERNATIVE_COLOR.ALT8,
      alt9: ALTERNATIVE_COLOR.ALT9,
      alt10: ALTERNATIVE_COLOR.ALT10,
      alt11: ALTERNATIVE_COLOR.ALT11,
      alt12: ALTERNATIVE_COLOR.ALT12,
    },
    random: RANDOM_COLORS,
  },
}

export default theme
