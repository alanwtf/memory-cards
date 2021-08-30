import React, { useState, useEffect } from 'react';
import jotaro1 from './img/jojo1.png';
import jotaro2 from './img/jojo2.png';
import jotaro3 from './img/jojo3.png';
import jotaro4 from './img/jojo4.png';
import jotaro5 from './img/jojo5.png';
import jotaro6 from './img/jojo6.png';
import './App.css';
import Card from './components/Card';

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cards, setCards] = useState([
    {
      hasBeenClicked: false,
      src: jotaro1,
      id: 0,
    },
    {
      hasBeenClicked: false,
      src: jotaro2,
      id: 1,
    },
    {
      hasBeenClicked: false,
      src: jotaro3,
      id: 2,
    },
    {
      hasBeenClicked: false,
      src: jotaro4,
      id: 3,
    },
    {
      hasBeenClicked: false,
      src: jotaro5,
      id: 4,
    },
    {
      hasBeenClicked: false,
      src: jotaro6,
      id: 5,
    },
  ]);

  function increaseScore() {
    setScore(score + 1);
    if (maxScore <= score) {
      setMaxScore(score + 1);
    }
  }

  function showClicks()
  {
    console.log(" ");
    cards.forEach((card) => {
      
      console.log(card.id + ": " + card.hasBeenClicked);
    });
  }

  /*useEffect(()=>{
    shuffleCards();
  },[score])*/

  function checkClicks(id) {
    console.log(id + " HOLA: " + cards[id].hasBeenClicked);
    let idx = cards.findIndex((card) => card.id == id);
    if (cards[idx].hasBeenClicked) {
      alert('YOUY LOSE YOU FAUCKING IDIOT');
      reset();
    } else {
      console.log(id);
      showClicks();
      increaseScore();

     let new_cards = shuffleCards().map((singular) => {
        if (singular.id === id) {
          console.log("id == " + id);
          return {
            ...singular,
            hasBeenClicked: true,
          };
        } else {
          return {...singular};
        }
      })
      setCards(new_cards);
      
      showClicks();
    }
    console.log(cards);
    
  }

  function shuffleCards() {
    
    console.log("shuffle");
    return cards.sort(() => Math.random() - 0.5);
    //setCards(cards.sort(() => Math.random() - 0.5));
    //console.log("shuffle");
  }

  function reset() {
    console.log("reset");
    let new_cards = shuffleCards().map((singular) => {
      return {
        ...singular,
        hasBeenClicked: false,
      };
    });
    
    setCards(
      new_cards
    );
    
    //shuffleCards();
    setScore(0);
  }

  return (
    <div>
      <div>
        Score: {score} Max Score: {maxScore}
      </div>
      <div className="App">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              info={card}
              add={increaseScore}
              checkClicks={checkClicks}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
