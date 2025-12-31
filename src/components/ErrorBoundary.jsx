import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "red" }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}
