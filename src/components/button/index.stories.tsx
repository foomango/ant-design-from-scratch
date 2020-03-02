import React from 'react'

import Button from '.'
import './style'
import './stories.scss'

export default {
  title: 'Button',
  component: Button,
}

export const Basic = () => (
  <div className="button-demo">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
)

export const Size = () => {
  const size1 = 'large'
  const size2 = 'small'
  return (
    <>
      <div className="button-demo">
        <Button type="primary" size={size1}>
          Primary
        </Button>
        <Button size={size1}>Default</Button>
        <Button type="dashed" size={size1}>
          Dashed
        </Button>
        <Button type="link" size={size1}>
          Link
        </Button>
      </div>
      <div className="button-demo">
        <Button type="primary" size={size2}>
          Primary
        </Button>
        <Button size={size2}>Default</Button>
        <Button type="dashed" size={size2}>
          Dashed
        </Button>
        <Button type="link" size={size2}>
          Link
        </Button>
      </div>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <div className="button-demo">
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </div>
    </>
  )
}
