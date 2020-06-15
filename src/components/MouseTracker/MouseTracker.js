import React from 'react';

import './MouseTracker.styles.scss';

export default class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillMount() {
    window.removeEventListener('mousemove', this.handleMouseMove); 
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      
        <div className={'mouse-tracker'} style={{ position: 'relative', left: this.state.x - 4, top: this.state.y }} />
      
    );
  }
}