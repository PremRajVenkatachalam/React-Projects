import { useState } from 'react'
import './App.css'

const FaqItem = ({question, answer}) => {
  const[show, setShow] = useState(false);

  const toggleShow = () =>{
    setShow(!show);
  };
  return(
  <div className={`faq-item ${show ? "active" : ""}`}>
    <div className="faq-item-header" onClick={toggleShow}>{question} ?</div>
    <div className="faq-item-body">
      <div className="faq-item-body-content">
       {answer}
       </div>
    </div>
  </div>
  );
};


const FaqAccordion = ({data}) =>{
  return(
    <div className="faq-accordion">
        <h2>FAQs</h2>
        {data.map((item)=>(
            <FaqItem key={item.id} 
            question={item.question}
            answer={item.answer}
            />
        ))}
      </div>
  );
};


const data = [
  {
    "id": 1,
    "question": "What is JSX in React?",
    "answer": "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild() or createElement()."
  },
  {
    "id": 2,
    "question": "What are hooks in React?",
    "answer": "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. The most commonly used hooks are useState and useEffect."
  },
  {
    "id": 3,
    "question": "What is the difference between state and props in React?",
    "answer": "Props are read-only and are passed to a component from its parent, whereas state is a local data storage that is mutable and managed within the component itself."
  }
]


function App(){
  return (
    <>
     <div className="App">
      <FaqAccordion data = {data} />
      </div> 
    </>
  );
};



export default App
