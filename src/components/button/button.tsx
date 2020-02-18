/* eslint-disable react/button-has-type */
import React from 'react'
import classNames from 'classnames'

import { tuple } from '../../util/type'

const ButtonTypes = tuple('default', 'primary')
export type ButtonType = typeof ButtonTypes[number]
const ButtonHTMLTypes = tuple('button', 'submit', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
}

export interface BaseButtonProps {
  type?: ButtonType
}

type ButtonProps = BaseButtonProps & NativeButtonProps

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const { htmlType = 'button', type } = props
  const prefixCls = 'ant-btn'
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
  })

  return (
    <button type={htmlType} className={classes}>
      {props.children}
    </button>
  )
}

export default Button
