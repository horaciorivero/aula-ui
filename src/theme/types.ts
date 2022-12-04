export enum THEME_ID {
  AULA = 'aula',
}

export interface Theme {
  borderRadius: number
  typography: {
    fontWeight: {
      normal: 'normal'
      bold: 'bold'
      100: '100'
      200: '200'
      300: '300'
      400: '400'
      500: '500'
      600: '600'
      700: '700'
      800: '800'
      900: '900'
    }
    fontSize: {
      tiny: number
      small: number
      normal: number
      large: number
      huge: number
      giant: number
    }
    fontFamily: {
      regular: string
      medium: string
      bold: string
    }
  }
  palette: {
    white: string
    black: string
    shadow: string
    shadowLight: string
    border: string
    background: string
    ripple: string
    text: string
    textLight: string
    tooltip: string
    info: string
    warning: string
    error: string
    success: string
    onSurface: string
    onPrimary: string
    onSecondary: string
    onBackground: string
    onBackgroundSecondary: string
    status: {
      info: string
      danger: string
      success: string
      warning: string
    }
    surface: {
      s100: string
      s200: string
      s300: string
    }
    primary: {
      p100: string
      p200: string
      p300: string
      p400: string
      p500: string
      p600: string
      p700: string
      p800: string
      p900: string
      light: string
      main: string
      dark: string
    }
    secondary: {
      p100: string
      p200: string
      p300: string
      p400: string
      p500: string
      p600: string
      p700: string
      p800: string
      p900: string
      light: string
      main: string
      dark: string
    }
    alternatives: {
      alt1: string
      alt2: string
      alt3: string
      alt4: string
      alt5: string
      alt6: string
      alt7: string
      alt8: string
      alt9: string
      alt10: string
      alt11: string
      alt12: string
    }
    random: string[]
  }
}
