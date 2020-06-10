import React from 'react';

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
      
        <div style={{ position: 'absolute', left: this.state.x - 25, top: this.state.y - 25, width: 50, height: 50, backgroundColor: 'red', opacity: 0.5, borderRadius: '50%' }} />
      
    );
  }
}