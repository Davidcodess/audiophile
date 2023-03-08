import React from 'react';

class Product extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
      totalRemaining:55,

    }
  }

  clickMe() {
    this.setState({
      clicks: this.state.clicks +1
    })

    console.log('added to cart',this.props.name)
  }

  clickMe2() {
    this.setState({
      clicks: this.state.clicks -1,
      totalRemaining: this.state.totalRemaining -1,
    })

    console.log('Nevermind! removing', this.props.name)
  }
    render() {
      return (
        <div>
          <p> The New {this.props.name}</p>
          <button onClick={() => this.clickMe()}>+</button>
          <button onClick={() => this.clickMe2()}>-</button>
        
          <span> {this.state.clicks} added to your cart 
          {this.state.totalRemaining}</span>
        </div>
      )
    }
  }

  export default Product;