import React from 'react'
import { SearchOutlined, PoweroffOutlined } from '@ant-design/icons'

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

export const Ghost = () => {
  return (
    <div className="site-button-ghost-wrapper button-demo">
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        dashed
      </Button>
      <Button ghost>link</Button>
    </div>
  )
}

export const Block = () => {
  return (
    <div className="button-demo">
      <Button type="primary" block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type="dashed" block>
        Dashed
      </Button>
      <Button type="link" block>
        Link
      </Button>
    </div>
  )
}

export const Icon = () => {
  return (
    <div className="button-demo">
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  )
}

class LoadingApp extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true })
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true })
  }

  render() {
    return (
      <div className="button-demo">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={this.state.iconLoading}
          onClick={this.enterIconLoading}
        >
          Click me!
        </Button>
      </div>
    )
  }
}

export const Loading = () => {
  return <LoadingApp />
}
