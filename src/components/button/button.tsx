/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { defaultProps } from 'recompose'

import { tuple } from '../../util/type'
import { SizeType } from '../config-provider/size-context'
import usePrevious from '../../util/use-previous'

const ButtonTypes = tuple('dashed', 'default', 'link', 'primary')
export type ButtonType = typeof ButtonTypes[number]
const ButtonHTMLTypes = tuple('button', 'submit', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

type Loading = boolean | { delay?: number }

export interface BaseButtonProps {
  block?: boolean
  children?: React.ReactNode
  ghost?: boolean
  icon?: React.ReactNode
  loading?: Loading
  size?: SizeType
  type?: ButtonType
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

type ButtonProps = Partial<NativeButtonProps>

const wrapSpan = (child: React.ReactChild) => {
  if (typeof child === 'string') {
    return <span>{child}</span>
  }

  return child
}

const spanChildren = (children: React.ReactNode) => {
  return React.Children.map(children, child =>
    wrapSpan(child as React.ReactChild)
  )
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
  const { block, children, ghost, icon, size, type, ...rest } = props
  const { htmlType, loading, ...otherProps } = rest

  const [, setLoadingState] = useState<Loading>(false)
  const delayTimeout = useRef(0)
  const previousLoadingProp = usePrevious(loading)

  useEffect(() => {
    if (previousLoadingProp && previousLoadingProp !== 'boolean') {
      clearTimeout(delayTimeout.current)
    }

    if (loading && typeof loading !== 'boolean' && loading.delay) {
      delayTimeout.current = window.setTimeout(() => {
        setLoadingState(loading)
      }, loading.delay)
    } else if (previousLoadingProp !== loading) {
      setLoadingState(loading)
    }

    return () => {
      if (delayTimeout.current) {
        clearTimeout(delayTimeout.current)
      }
    }
  })

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

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const onClick = otherProps
    if (onClick) {
      ;(onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >)(e)
    }
  }

  const iconNode = icon
  const kids = children || children === 0 ? spanChildren(children) : null

  return (
    <button
      {...(otherProps as NativeButtonProps)}
      type={htmlType}
      className={classes}
      onClick={handleClick}
    >
      {iconNode}
      {kids}
    </button>
  )
}

const withDefaultProps = defaultProps<ButtonProps>({
  block: false,
  ghost: false,
  htmlType: 'button',
  loading: false,
})

export default withDefaultProps(Button)
