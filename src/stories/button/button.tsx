import React from 'react'
// import type { Properties } from 'csstype'
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonSize = 'small' | 'medium' | 'large'

interface StylesProps {
  size: ButtonSize
  mode: 'primary' | 'secondary'
  background?: string
}

// Record<string, Properties<string | number>>
const useStyles = ({ mode, size, background }: StylesProps) => {
  const btnSize = {
    small: {
      fontSize: '12px',
      padding: '10px 16px',
    },
    medium: {
      fontSize: '14px',
      padding: '11px 20px',
    },
    large: {
      fontSize: '16px',
      padding: '12px 24px;',
    },
  }[size]

  const btnColor = {
    primary: {
      color: 'white',
      backgroundColor: '#1ea7fd',
    },
    secondary: {
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  }[mode]

  // border box all
  return {
    button: {
      fontFamily: 'Nunito Sans',
      fontWeight: 700,
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      background,
      ...btnSize,
      ...btnColor,
    },
  }
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean
  background?: string
  size?: ButtonSize
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  background,
  children,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary'
  const styles = useStyles({ size, mode, background })
  return (
    <button style={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
