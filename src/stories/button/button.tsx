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
      padding: '6px 10px 6px 10px',
    }),
    large: css({
      fontSize: '16px',
      padding: '12px 24px;',
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
      color: 'purple',
    },
  })

  return cx(mode, size, base)
}

interface IconPartProps {
  icon: React.ReactNode
}

const ButtonIcon: React.FC<IconPartProps> = ({ icon }) =>
  icon ? (
    <div
      className={css({
        width: 25,
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      {icon}
    </div>
  ) : null

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: ButtonSize
  primary?: boolean
  background?: string
  iconLefth?: React.ReactNode
  iconRigth?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  background,
  iconLefth,
  iconRigth,
  className,
  children,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary'
  const styles = createStyles({ size, mode, background })
  return (
    <button className={cx(styles, className)} {...props}>
      <ButtonIcon icon={iconRigth} />
      <span
        className={css({
          display: 'flex',
          alignSelf: 'center',
          margin: '0px 5px 0px 5px',
        })}
      >
        {children}
      </span>
      <ButtonIcon icon={iconLefth} />
    </button>
  )
}

export default Button
