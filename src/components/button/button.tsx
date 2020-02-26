/* eslint-disable react/button-has-type */
import React from 'react'
import classNames from 'classnames'

import { tuple } from '../../util/type'
import { SizeType } from '../config-provider/size-context'

const ButtonTypes = tuple('dashed', 'default', 'link', 'primary')
export type ButtonType = typeof ButtonTypes[number]
const ButtonHTMLTypes = tuple('button', 'submit', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
}

export interface BaseButtonProps {
  type?: ButtonType
  size?: SizeType
}

type ButtonProps = BaseButtonProps & NativeButtonProps

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const { htmlType = 'button', type, size } = props
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
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
  })

  return (
    <button type={htmlType} className={classes}>
      {props.children}
    </button>
  )
}

export default Button
