import React from 'react'
import './App.css'

class DivContainer extends React.Component {
  render() {
    const theme = this.props.theme.color;
    const backgroundColor = theme ? 'white' : 'black';
    const color = theme ? 'black' : 'white';
    return (
      <div style={{ background: backgroundColor, color:color, position: 'absolute', width: '100%', height: '100vh' }}>
        <h3>Choose your theme.....</h3>
      </div>
    );
  }
}
class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { color: true }
  }
  handleClick() {
    this.setState({
      color: this.refs.complete.checked
    })
  }
  render() {
    return (
      <div>
        <div className='theme-switcher'>
          <label style={this.state.color?{color:'black'}:{color:'white'}}>Theme Switcher</label>
          <input type='checkbox' onChange={this.handleClick} ref="complete" checked={this.state.color} />
        </div>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class App extends React.Component {
  renderTheCat(theme) {
    return <DivContainer theme={theme} />;
  }
  render() {
    return (
      <div>
        <Theme render={this.renderTheCat} />
      </div>
    );
  }
}

export default App