import React, { Component } from 'react';
import './Burger.css'

class Burger extends Component {
  constructor(props){
    super(props);
    this.state={
      cheese : 0,
      lettuce : 0,
      meat : 0,
      tomato : 0,
      totalprice : 0
    }
  }

  addingredient=(action, ingredient, price)=>{
    let orig;
    let pri = this.state.totalprice
    switch(ingredient) {
      case "cheese":
        orig = this.state.cheese;
        if (action === "remove" && orig>0) {
          this.setState({cheese: orig-1});
          this.setState({totalprice: pri - price});
        } else if(action ==="add"){
          this.setState({cheese: orig+1});
          this.setState({totalprice: pri + price});
        }
        break;
      case "lettuce":
        orig = this.state.lettuce;
        if (action === "remove" && orig>0) {
          this.setState({lettuce: orig-1});
          this.setState({totalprice: pri - price});
        } else if(action ==="add"){
          this.setState({lettuce: orig+1});
          this.setState({totalprice: pri + price});
        }
        break;
      case "meat":
        orig = this.state.meat;
        if (action === "remove" && orig>0) {
          this.setState({meat: orig-1});
          this.setState({totalprice: pri - price});
        } else if(action ==="add"){
          this.setState({meat: orig+1});
          this.setState({totalprice: pri + price});
        }
        break;
      case "tomato":
        orig = this.state.tomato;
        if (action === "remove" && orig>0) {
          this.setState({tomato: orig-1});
          this.setState({totalprice: pri - price});
        } else if(action ==="add"){
          this.setState({tomato: orig+1});
          this.setState({totalprice: pri + price});
        }
        break;
      default:
        break;
    }
  }

  ingredients = () =>{
    let ing =[]
    for(let i =0; i<this.state.lettuce; i++){
      ing.push(<img key ={ing.length} src = "images/lettuse.jpg" alt="Lettuce"/>)
    }
    for(let i =0; i<this.state.tomato; i++){
      ing.push(<img key ={ing.length} src = "images/tomato.jpg" alt="Tomato"/>)
    }
    for(let i =0; i<this.state.cheese; i++){
      ing.push(<img key ={ing.length} src = "images/cheese.jpg" alt="Cheese"/>)
    }
    for(let i =0; i<this.state.meat; i++){
      ing.push(<img key ={ing.length} src = "images/meat.jpg" alt="Meat"/>)
    }
    return ing;
  }

  render() {
    return (
      <div className = "container" >
        <div className = "burgerbuilder">
          <h1 className = "lheading">Burger Builder</h1>
          <div className = "builder">
            <div className="topbun"> <img src = "images/top.jpg" alt="Top bun"/></div>
            <div className= "ingredients">{this.ingredients()}</div>
            <div className="bottombun"> <img src = "images/bottom.jpg" alt="bottom bun"/> </div>
          </div>
        </div>

        <div className = "burgermenu">
          <h1 className = "rheading">Burger Menu</h1>
          <div  className = "menucontainer">
            <div className = "item">
              <h2>Total Price: {this.state.totalprice}$</h2>
            </div>
            <div className = "item">
              <h2 className= "lheading">Cheese</h2>
              <h3>x{this.state.cheese}</h3>
              <button onClick={()=>this.addingredient("add", "cheese", 2)}>ADD</button>
              <button onClick={()=>this.addingredient("remove", "cheese", 2)}>REMOVE</button>
            </div>
            <div className = "item">
              <h2 className= "lheading">Lettuce</h2>
              <h3>x{this.state.lettuce}</h3>
              <button onClick={()=>this.addingredient("add", "lettuce", 1)}>ADD</button>
              <button onClick={()=>this.addingredient("remove", "lettuce", 1)}>REMOVE</button>
            </div>
            <div className = "item">
              <h2 className= "lheading">Tomato</h2>
              <h3>x{this.state.tomato}</h3>
              <button onClick={()=>this.addingredient("add", "tomato", 1)}>ADD</button>
              <button onClick={()=>this.addingredient("remove", "tomato", 1)}>REMOVE</button>
            </div>
            <div className = "item">
              <h2 className= "lheading">Meat</h2>
              <h3>x{this.state.meat}</h3>
              <button onClick={()=>this.addingredient("add", "meat", 3)}>ADD</button>
              <button onClick={()=>this.addingredient("remove", "meat", 3)}>REMOVE</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Burger;
