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
