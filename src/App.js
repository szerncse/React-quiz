import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizList from './Components/Quizlist';
import { type } from '@testing-library/user-event/dist/type';



function App() {
  
  
  const [userName, setUserName] = useState("");
  const [quizList, setQuizList] = useState(QuizList);
  const quiz = [...QuizList];
  const [selected, setSelected] = useState(4);
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [typeText, setTypetext] = useState("전체");
  
  const ChangeEvent =(data) =>{
  const ClassValue = data.target.className;
  const dataValue = data.target.value;



  

 switch(true){
  //incIudes("값")> 해당 문자열이 있는지 체크하는속성
  case ClassValue.includes("name") :
    setUserName(dataValue)
    break;
  case ClassValue.includes("random") :

 (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{
  return Math.random() - 0.5}).slice(0, selected)
) 
: setQuizList([...QuizList]).slice(0, selected))
 //0~1 사이의 값을 반환 > 0.5의 평균값을 얻게 되어 -0.5 ~ 0.5값으로 랜덤 출력

    break;
  case ClassValue.includes("cnt") :
      setSelected(dataValue);
    console.log("개수 바뀜")
    break;

  case ClassValue.includes("type") :
    (dataValue === "전체"
    ?
    setQuizList([...QuizList].slice(0, selected))
    :
    setQuizList([...QuizList].filter((e)=>{
      return e.type === dataValue
    }).slice(0, selected))
    )
      setTypetext(dataValue)
    break;
    default:
    console.log("데이터가 없습니다.");
    }
  }
// default 맨마지막에 넣기

  
// 로드가 되고 실행되는 함수 (3줄)
  useEffect(()=>{
    setQuizList([...QuizList].slice(0, selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeText === "전체" ? true : e.type ===typeText;
    }).length);
  },[typeText, selected])

  console.log(quizList)
  // console.log("실행끝 ")



  return (

  <>
  <Routes>
    <Route path="/" element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} selected={selected} quizList={quizList} quizCnt={quizCnt} />}/>
    <Route path="/quiz" element={<Detail quizList={quizList} userName={userName}/>} />   
  </Routes>
</>
  );
}


export default App;
