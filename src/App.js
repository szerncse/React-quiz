import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import QuizList from './Components/Quizlist';



function App() {

  const Quizlength = QuizList.length;
  console.log(Quizlength)
  const [userName, setUserName] = useState("");
  const [quizList, setQuizList] = useState(QuizList);
  const ChangeName =(data) =>{
    setUserName(data);
  }

  return (
  

  <>
  <Routes>
    <Route path="/" element={<Main ChangeName={ChangeName} userName={userName} Quizlength={Quizlength} quizList={quizList}/>}/>
    <Route path="/quiz" element={<Detail quizList={quizList} userName={userName}/>} />   
  </Routes>
</>
  );
}


export default App;
