import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import clickPhotos from "./clickPhotos.json";
import "./App.css";


class App extends Component {
  
  state ={
    selected: [],
    correctGuesses: 0,
    highScore: 0,
    clickPhotos: clickPhotos
   }
 
  
    
selectPhoto = id =>{
  let correctGuesses = this.state.correctGuesses;
  let highScore =this.state.highScore;
  let clickPhotos =this.state.clickPhotos
  console.log(id);


// for (let i = 0; i < this.state.selected.length; i++) {
  if (!this.state.selected.find(function(element) { return element === id;})){
    // id.push(this.state.selected[i]);
    this.setState({selected: [...this.state.selected, id]});

    // increment counter
    correctGuesses = correctGuesses+1;
    this.setState({correctGuesses: correctGuesses});
    console.log("guesses:"+correctGuesses);
    console.log(this.state.selected);
    clickPhotos.sort(function(a, b) {
      return 1 - Math.random()*2;
    });
    this.setState({clickPhotos: clickPhotos});
    
  }else{
    //If clicked twice -reset game -- check high score//
    this.setState({correctGuesses:0})
    console.log("guesses1:"+correctGuesses);
    if(correctGuesses > highScore)
    {highScore = correctGuesses;}
    this.setState({highScore: highScore});
    correctGuesses =0;
    console.log("guesses1:"+correctGuesses);
  }
// }

}

  render() {
    return (
  <Wrapper>
<div id="title">
<a><h1 className="title">Clicky Game</h1></a>
    <span>Correct Guesses: {this.state.correctGuesses} </span>
    <span> High Score: {this.state.highScore} </span>
  
</div>

      <div class="container">
      <div class ="row">
   
    {this.state.clickPhotos.map(clickPhoto => 
    (<ClickCard
      id= {clickPhoto.id}
      key={clickPhoto.id}
      name= {clickPhoto.name}
      image= {clickPhoto.image}
      selectPhoto ={this.selectPhoto}
      
    />)
    )} 
  
     </div>
     </div>
  </Wrapper>
    )}
  };
export default App;
