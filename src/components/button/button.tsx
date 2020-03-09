/* eslint-disable react/button-has-type */
import React from 'react'
import classNames from 'classnames'
import { defaultProps } from 'recompose'

import { tuple } from '../../util/type'
import { SizeType } from '../config-provider/size-context'

const ButtonTypes = tuple('dashed', 'default', 'link', 'primary')
export type ButtonType = typeof ButtonTypes[number]
const ButtonHTMLTypes = tuple('button', 'submit', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface BaseButtonProps {
  block?: boolean
  ghost?: boolean
  size?: SizeType
  type?: ButtonType
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

type ButtonProps = Partial<NativeButtonProps>

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const { block, ghost, size, type, ...rest } = props
  const { htmlType, ...otherProps } = rest

  const prefixCls = 'ant-btn'

  let sizeCls = ''
  switch (size) {
    case 'large':
      sizeCls = 'lg'
      break
    case 'small':
      sizeCls = 'sm'
      break
    default:
      break
  }

  const classes = classNames(prefixCls, {
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-background-ghost`]: ghost,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-${type}`]: type,
  })

  return (
    <button
      {...(otherProps as NativeButtonProps)}
      type={htmlType}
      className={classes}
    >
      {props.children}
    </button>
  )
}

const withDefaultProps = defaultProps<ButtonProps>({
  block: false,
  ghost: false,
  htmlType: 'button',
})

export default withDefaultProps(Button)
