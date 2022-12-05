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

type NamedStylesOutput<T> = {
  [Property in keyof T]: string
}

type NamedStylesInput<T> = { [P in keyof T]: React.CSSProperties }
function makeStyles<T extends NamedStylesInput<T> | NamedStylesInput<unknown>>(
  styles: T | NamedStylesInput<T>
): NamedStylesOutput<T> {
  // @ts-ignore
  return Object.keys(styles).reduce((pv, key) => {
    return {
      [key]: css(styles[key]),
      ...pv,
    }
  }, {})
}

const styles = makeStyles((theme, props) => {
  root: {
    width: 100,
  },
})

styles.root

const createButtonStyles = ({ background, ...props }: ButtonStylesProps) => {
  // button mode
  const mode = {
    primary: css({
      color: '#FFF',
      background: '#302666',
      '&:hover': {
        background: '#6356A3',
      },
    }),
    secondary: css({
      color: '#FFF',
      background: '#27a8ff',
      '&:hover': {
        background: '#5DC7FF',
      },
    }),
  }[props.mode]

  // button size
  const size = {
    small: css({
      fontSize: '1rem',
      padding: '7px 15px 7px 15px',
    }),
    medium: css({
      fontSize: '1rem',
      padding: '9px 19px 9px 19px',
    }),
    large: css({
      fontSize: '1rem',
      padding: '11px 21px 11px 23px',
    }),
  }[props.size]

  // button base styles
  const base = css({
    display: 'flex',
    color: '#FFF',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 600,
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    background,
  })

  return cx(mode, size, base)
}

interface IconPartProps {
  icon: React.ReactNode
  size: ButtonSize
  left?: boolean
  className?: string
}

const ButtonIcon: React.FC<IconPartProps> = ({ icon, size, left, className, ...props }) => {
  const wh = { small: '16px', medium: '18px', large: '20px' }[size]
  return (
    <div
      className={cx(
        css({
          width: wh,
          height: wh,
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          '& svg': {
            width: '100%',
            height: '100%',
          },
          ...(left ? { marginRight: '.5em' } : { marginLeft: '.5em' }),
        }),
        className
      )}
      {...props}
    >
      {icon}
    </div>
  )
}

interface ButtonClasses {
  root?: string
  icon?: string
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
  classes?: ButtonClasses
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
  classes,
  children,
  ...props
}) => {
  const mode = primary ? 'primary' : 'secondary'
  const styles = createButtonStyles({ size, mode, background })
  return (
    <button className={cx(styles, className, classes?.root)} {...props}>
      <ButtonIcon left icon={iconLeft} size={size} className={classes?.icon} />
      <span
        className={css({
          display: 'flex',
          alignSelf: 'center',
          whiteSpace: 'nowrap',
        })}
      >
        {label ? label : children}
      </span>
      <ButtonIcon icon={iconRight} size={size} className={classes?.icon} />
    </button>
  )
}

export default Button
