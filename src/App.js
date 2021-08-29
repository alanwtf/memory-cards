import React, { useState } from 'react';
import jotaro from './img/jotaro3.png';
import './App.css';
import Card from './components/Card';

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [cards, setCards] = useState([
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 0,
    },
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 1,
    },
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 2,
    },
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 3,
    },
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 4,
    },
    {
      hasBeenClicked: false,
      src: jotaro,
      id: 5,
    },
  ]);
  function increaseScore() {
    setScore(score + 1);
    if (maxScore <= score) {
      setMaxScore(score + 1);
    }
  }

  function checkClicks(id) {
    if (cards[id].hasBeenClicked) {
      alert('YOUY LOSE YOU FAUCKING IDIOT');
      reset();
    } else {
      console.log(id);
      increaseScore();
      setCards(
        cards.map((singular) => {
          if (singular.id === id) {
            return {
              ...singular,
              hasBeenClicked: true,
            };
          } else {
            return singular;
          }
        })
      );
    }
  }

  function shuffleCards() {
    setCards(cards.sort(() => Math.random() - 0.5));
    console.log(cards);
  }

  function reset() {
    setCards(cards.sort(() => Math.random() - 0.5));
    setCards(
      cards.map((singular) => {
        return {
          ...singular,
          hasBeenClicked: false,
        };
      })
    );
    shuffleCards();
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
