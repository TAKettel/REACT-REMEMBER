import React, { Component} from 'react';
import Wrapper from './components/Wrapper';
import StickyHeader from './components/StickyHeader';
import CharacterBlock from './components/CharacterBlock';
import CharacterCard from './components/CharacterCard';
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
  };

  characterArray = [];
  indexesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  // score = 0;

  checkForDupe = id => {
    //  i'm calling id and then calling it again inside the forEach, I need to ask if this works, or why it dosen't.    
      //  if the new id is already in the array... game over.
      if(this.characterArray.includes(id)) {
        console.log("game over");
        setTimeout(this.gameover(), 5000);
      } else {
      //  ... else add to the array to be checked next time.
        this.characterArray.push(id);
        this.setState(prevState => {
          return {score: prevState.score + 1}
        })
        console.log(this.characterArray);
        this.render();
      }
  }

  gameover() {
    this.characterArray = [];
    this.setState({score: 0});
    this.render();
  }

  shuffle(indexesArray) {
    var i,
        j,
        temp;
    for (i = this.state.characters.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.indexesArray[i];
        this.indexesArray[i] = this.indexesArray[j];
        this.indexesArray[j] = temp;
    }
    return indexesArray;
  };

  // https://gist.github.com/ecarter/1423674
  mapOrder(array, order, key){
    array.sort( function (a, b) {
      var A = a[key], B = b[key];
      
      if (order.indexOf(A) > order.indexOf(B)) {
        return 1;
      } else {
        return -1;
      }
      
    });
    
    return array;
  }

  render() {
    // this.shuffle(this.characters);
    this.shuffle(this.indexesArray);
    this.mapOrder(characters, this.indexesArray, 'id')
    return (
      <Wrapper>
        <StickyHeader score={this.state.score}/>
        {console.log(this.state.score)}
        <div className="row">
        {/* Why aren't the Bootstrap grid elements working?  Is there something else I need to do to get a max 4-col character set? */}
        <CharacterBlock>
        {/* Randomizing the INDEX of the array elements. Generate an array of indexes, then switch and swap. 
        Not sure that I'm doing this right just yet, or how to get the shuffled index to talk to the mapping. */}
        {this.state.characters.map((friend, q) => (
          <CharacterCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            checkForDupe={this.checkForDupe}
          />
        ))}
        </CharacterBlock>
        </div>
      </Wrapper>
    );
  }
};

// Things that still need to happen:
//    Get the navbar to not margin-move with the cards, and have the navbar show on top. Z-index helps with the second part, at least. DONE.
//    Check if character array contains the character added.  DONE.
//    Get the score to display and update appropriately. ISSUE: Communicating between App and StickyHeader. DONE.
//    Shuffle the characters on the page. ISSUE: Communicating between the indexesArray and the mapping. DONE.
//    Restart game once completed (and maybe congratulate if they hit the max?). Not quite...
//    Correctly deploying to GitPages. ISSUE: Currently only showing my initial README.md.

export default App;
