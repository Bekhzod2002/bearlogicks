import React from "react";
import './index.scss'
import Header from "./header/header";
import vector1 from './Assets/images/Vector (1).png';
import vector2 from './Assets/images/Vector (2).png';
import vector3 from './Assets/images/Vector (3).png';
import vector4 from './Assets/images/Vector (4).png';
import vector5 from './Assets/images/Vector (5).png';
import vector6 from './Assets/images/Vector (6).png';
import vector7 from './Assets/images/Vector (7).png';
import white from './Assets/images/white.png';
import adaptiveimg from './Assets/images/adaptiveimg.png';
import rectangle1 from './Assets/images/rectangle_img1.png';
import polygon from './Assets/images/Polygon 2.png';
import rectangle2 from './Assets/images/rectangle_img2.png';
import rectangle3 from './Assets/images/rectangle_img3.png';
import group35 from './Assets/images/Group 35.png';

const App = () => {
  return (
    <>
      <div className="Home">
        <Header/>         
        <img className="white" src={white} alt="" />

         <div className="Home__container">
          <div className="vector1">
            <img src={vector1} alt="" />
          </div>
          <div className="vector2">
            <img src={vector2} alt="" />
          </div>
          <div className="vector3">
            <img src={vector3} alt="" />
          </div>
          <div className="vector4">
            <img src={vector4} alt="" />
          </div>
          <div className="landing">
            <div>
              <div className="head_main">БОЛЕЕ 40% мам БОЯТСЯ ПРИУЧИТЬ <br/> РЕБЕНКА К РУКАМ!</div>
              <div className="adaptivehead">
                Joonies помогает <br/> 
                родителям лучше <br/> 
                понимать и чувствовать <br/> 
                своего ребенка на <br/> 
                ранних этапах его <br/> 
                развития
              </div>
              <p className="txt_main">
                <span style={{fontWeight: '550'}}>Но физический контакт особенно важен: </span>каждый поцелуй, <br/> 
                каждое объятие и каждое нежное прикосновение стимулируют <br/> 
                гармоничное сенсорное развитие ребенка, благотворно <br/> 
                влияют на его организм и психику, а также укрепляют его связь <br/>
                с родителем.
              </p>
              <p className="adaptivetxt">
                С первых дней жизни малыши <br/> 
                находятся в объятиях мягких <br/> 
                подгузников Joonies. Каждая смена <br/> 
                подгузника сопровождается <br/> 
                прикосновениями, которые <br/> 
                положительно влияют на развитие <br/> 
                всех сенсорных систем ребенка.
              </p>
              <img className="polygon" src={polygon} alt="" />
            </div>
            <div className="rectangle1">
              <img className="first" src={rectangle1} alt="" />
              <img className="second" src={adaptiveimg} alt="" />
            </div>
          </div>
          <div className="aboutcompany">
            <div className="vector5">
              <img src={vector5} />
            </div>
            <div className="vector6">
              <img src={vector6}/>
            </div>
            <div className="vector7">
              <img src={vector7} />
            </div>
            <div className="about" >
              <img className="rectangle2" src={rectangle2} />
              <div className="img">
                <div className="imghead">Кампания #ОбнимаяСJoonies</div>
                <p className="imgtxt">
                  Чтобы обратить внимание родителей на важную роль объятий и <br/>
                  поцелуев в развитии малыша, <span style={{fontWeight: '700'}}>бренд подгузников Joonies запустил <br/> кампанию #ОбнимаяСJoonies.</span> 
                  <br/>
                  <br/>
                  Мы рассказываем родителям об основных сенсорных системах <br/> 
                  ребенка, которые активно развиваются в первые 1,5-2 года, а также <br/> 
                  продолжают развиваться в течение всей жизни.
                </p>
              </div>
              <img className="rectangle3" src={rectangle3} />
            </div>
            <div className="important">
              <img src={group35} alt="" />
              <p className="importtxt">
                Экспертизу бренда в вопросах правильного сенсорного <br/> 
                развития малышей с первых дней жизни поддерживают <br/> 
                специалисты – детские неврологи и педиатры.
              </p>
            </div>
          </div>
        </div>  
      </div>  
    </>
  );
}

export default App;
