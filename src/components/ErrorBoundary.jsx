import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: "white", background: "#0f172a" }}>
          ❌ Something broke. Refresh or contact admin.
        </div>
      );
    }
    return this.props.children;
  }
}
