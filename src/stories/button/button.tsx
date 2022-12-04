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

export interface ButtonStylesProps {
  size: ButtonSize
  mode: 'primary' | 'secondary'
  background?: string
}

const createButtonStyles = ({ background, ...props }: ButtonStylesProps) => {
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
      padding: '6px 12px 6px 12px',
    }),
    medium: css({
      fontSize: '14px',
      padding: '8px 14px 8px 14px',
    }),
    large: css({
      fontSize: '16px',
      padding: '10px 16px 10px 16px',
    }),
  }[props.size]

  // button base styles
  const base = css({
    display: 'flex',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    borderRadius: '4px',
    cursor: 'pointer',
    background,
    '&:hover': {
      color: 'white',
      background: 'purple',
    },
  })

  return cx(mode, size, base)
}

interface IconPartProps {
  icon: React.ReactNode
  size: ButtonSize
  left?: boolean
}

const ButtonIcon: React.FC<IconPartProps> = ({ icon, size, left }) => {
  const width = {
    small: 18,
    medium: 20,
    large: 24,
  }[size]

  return (
    <div
      className={css({
        width,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        ...(left ? { marginRight: 10 } : { marginLeft: 10 }),
      })}
    >
      {icon}
    </div>
  )
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: ButtonSize
  label?: string
  primary?: boolean
  background?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  label = '',
  size = 'medium',
  background,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary'
  const styles = createButtonStyles({ size, mode, background })
  return (
    <button className={cx(styles, className)} {...props}>
      <ButtonIcon left icon={iconLeft} size={size} />
      <span
        className={css({
          display: 'flex',
          alignSelf: 'center',
          whiteSpace: 'nowrap',
        })}
      >
        {label ? label : children}
      </span>
      <ButtonIcon icon={iconRight} size={size} />
    </button>
  )
}

export default Button
