import React from 'react'
import { cx, css } from '@emotion/css'
import type { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

// TODO

// test tree shaking
// try override classname and internal styles
// monorepo?
// override css property
// set/upload fonts
// set global props
// styled-system
// border box all
// set theme
// create theme hooks
// create make styles utils, inject theme and props
// unit tests
// install bundle size package

export type ButtonSize = 'small' | 'medium' | 'large'

export interface StylesProps {
  size: ButtonSize
  mode: 'primary' | 'secondary'
  background?: string
}

const createStyles = ({ background, ...props }: StylesProps) => {
  // button mode
  const mode = {
    primary: css({
      border: 0,
      color: 'white',
      background: '#1ea7fd',
    }),
    secondary: css({
      border: '1px solid #333',
      color: '#333',
      background: 'transparent',
    }),
  }[props.mode]

  // button size
  const size = {
    small: css({
      fontSize: '12px',
      padding: '10px 16px',
    }),
    medium: css({
      fontSize: '14px',
      padding: '11px 20px',
    }),
    large: css({
      fontSize: '16px',
      padding: '12px 24px;',
    }),
  }[props.size]

  // button base styles
  const base = css({
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    borderRadius: '4px',
    cursor: 'pointer',
    background,
    '&:hover': {
      color: 'purple',
    },
  })

  return cx(mode, size, base)
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  primary?: boolean
  background?: string
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  className,
  primary = false,
  size = 'medium',
  background,
  children,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary'
  const styles = createStyles({ size, mode, background })
  return (
    <button className={cx(styles, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
