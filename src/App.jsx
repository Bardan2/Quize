import { useEffect, useMemo, useState } from "react";
import "./App.css"
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")


  const data = [


    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    // starting to add.............
    {
      id: 4,
      question: "What is the capital of France?",
      answers: 	[{text: "Paris", correct: true}, {text: "London", correct: false}, {text: "Berlin", correct: false}, {text: "Rome", correct: false}]
    },    
    {
      id: 5,
      question: "What is the chemical symbol for gold?",
      answers:[{text: "Au", correct: true}, {text: "Ag", correct: false}, {text: "Cu", correct: false}, {text: "Fe", correct: false}]
    },    
    {
      id: 6,
      question: "What is the largest planet in our solar system?",
      answers: [{text: "Jupiter", correct: true}, {text: "Saturn", correct: false}, {text: "Neptune", correct: false}, {text: "Uranus", correct: false}]
    },    
    {
      id: 7,
      question: "What is the capital of Spain?",
      answers: [{text: "Madrid", correct: true}, {text: "Barcelona", correct: false}, {text: "Valencia", correct: false}, {text: "Sevilla", correct: false}]
    },    
    {
      id: 8,
      question: "What is the name of the world's largest ocean?",
      answers: [{text: "Pacific Ocean", correct: true}, {text: "Atlantic Ocean", correct: false}, {text: "Indian Ocean", correct: false}, {text: "Arctic Ocean", correct: false}]
    },    
    {
      id: 9,
      question: "What is the name of the world's tallest mountain?",
      answers: [{text: "Mount Everest", correct: true}, {text: "K2", correct: false}, {text: "Kangchenjunga", correct: false}, {text: "Lhotse", correct: false}]
    },    
    {
      id: 10,
      question: "What is the name of the world's largest river?",
      answers: [{text: "Nile River", correct: true}, {text: "Amazon River", correct: false}, {text: "Yangtze River", correct: false}, {text: "Mississippi-Missouri-Red-Arkansas River", correct: false}]
    },    
    {
      id: 11,
      question: "What is the name of the world's smallest continent?",
      answers: [{text: "Australia", correct: true}, {text: "Asia", correct: false}, {text: "Africa", correct: false}, {text: "Europe", correct: false}]
    },    
    {
      id: 12,
      question: "What is the name of the world's most populous country?",
      answers:[{text: "China", correct: true}, {text: "India", correct: false}, {text: "United States", correct: false}, {text: "Indonesia", correct: false}]
    },  
    {
      id: 13,
      question: "What is the scientific name for the common house cat?",
      answers: [{text: "Felis catus", correct: true}, {text: "Canis lupus familiaris", correct: false}, {text: "Equus ferus caballus", correct: false}, {text: "Bos taurus", correct: false}]
    },  
    {
      id: 14,
      question: "What is the capital of Australia?",
      answers: [{text: "Canberra", correct: true}, {text: "Sydney", correct: false}, {text: "Melbourne", correct: false}, {text: "Brisbane", correct: false}]
    },  
    {
      id: 15,
      question: "What is the largest ocean on Earth?",
      answers: [{text: "Pacific Ocean", correct: true}, {text: "Atlantic Ocean", correct: false}, {text: "Indian Ocean", correct: false}, {text: "Arctic Ocean", correct: false}]
    },  
      // end ......................

  ]

  const moneyPyramid = useMemo(() => 
    [
      {id:1, amount: "$ 100"},
      {id:2, amount: "$ 500"},
      {id:3, amount: "$ 1000"},
      {id:4, amount: "$ 1500"},
      {id:5, amount: "$ 2000"},
      {id:6, amount: "$ 2500"},
      {id:7, amount: "$ 3000"},
      {id:8, amount: "$ 3500"},
      {id:9, amount: "$ 4000"},
      {id:10, amount: "$ 4500"},
      {id:11, amount: "$ 5000"},
      {id:12, amount: "$ 5500"},
      {id:13, amount: "$ 6000"},
      {id:14, amount: "$ 6500"},
      {id:15, amount: "$ 7000"},
    ].reverse(), 
    []
    ); 

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="App">
    {username ? (<>
      <div className="main">
      {stop? (<h1 className="endText">You earned: {earned}</h1>):(<>
      <div className="top">
        <div className="timer"> <Timer setStop={setStop} questionNumber={questionNumber} /> </div>
      </div>
      <div className="bottom">
        <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber= {setQuestionNumber} />
      </div> 
        </>)}
    </div>
    <div className="pyramid">
      <ul className="moneyList">

          {moneyPyramid.map(m => (

        <li className={questionNumber === m.id?"moneyListItem active":"moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
          ))}
        
      </ul>
    </div>
    </>) : <Start setUsername={setUsername} /> }
    
    </div>
  );
}

export default App;
