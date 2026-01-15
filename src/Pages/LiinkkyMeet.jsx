import React, {  useRef, useState } from "react";
import MagiqueMatching from "../Component/MagiqueMatching";
import "../StoreCss/LiinkkyMeet.css";
import {useNavigate}  from "react-router-dom"
import Loader from "../test/Test";
import Loader1 from "../test/Test2";
import Loader3 from "../test/Test3";
import Loader4 from "../test/Test4";
 const List = [
  "https://i.pravatar.cc/200?img=1",
  "https://i.pravatar.cc/200?img=2",
  "https://i.pravatar.cc/200?img=3",
  "https://i.pravatar.cc/200?img=4",
  "https://i.pravatar.cc/200?img=5",
  "https://i.pravatar.cc/200?img=6",
  "https://i.pravatar.cc/200?img=7",
  "https://i.pravatar.cc/200?img=8",
  "https://i.pravatar.cc/200?img=9",
  "https://i.pravatar.cc/200?img=10",
  "https://i.pravatar.cc/200?img=11",
  "https://i.pravatar.cc/200?img=12",
  "https://i.pravatar.cc/200?img=13",
  "https://i.pravatar.cc/200?img=14",
  "https://i.pravatar.cc/200?img=15",
  "https://i.pravatar.cc/200?img=16",
];

const RANDOM__MATCH = 8;

const LiinkkyMeet = () => {
  const Nav  = useNavigate()
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [Animate,SetAnimate] = useState(false)
  const [isSearching,SetIsSearhing] = useState(false)
  const loaderComponents = [Loader, Loader1, Loader3, Loader4];
  const [increamntLoader,setLoader] = useState(0);

  function animateShow(){
    SetAnimate(true)
    intervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev + 1 === RANDOM__MATCH) {
            clearInterval(intervalRef.current); 
            SetAnimate(false)
            return 0; 
          } 
          return prev + 1;
        });
      }, 300);

      
}
 
// {!Animate ?    <button onClick={()=>animateShow()}>animate</button>     : <p>error</p>}
 
  return (
    <div className="__ContainerLiinky">
      <div className="TitleApplication" onClick={()=>Nav("/")}>Linkky</div>
      <MagiqueMatching ListMatch={List} indexMatch={count} />


      <div   className="__Vibe-room">
         <div className="you designmatch">
          {isSearching  ? React.createElement(loaderComponents[increamntLoader]) : <video src="/8375616-uhd_2160_4096_25fps.mp4"   autoPlay  playsInline loop   />  }
             
         </div>
         <div className="me">
           <video src="/7261928-uhd_3840_2160_25fps.mp4"  className="me1"  autoPlay  playsInline loop   />
         </div>
      </div>

   <div className="action-wrapper">
      <div className="action-bar">
        <button className="btn add" onClick={()=>setLoader((prev)=>(prev+1)%loaderComponents.length)}>＋ Add</button>
        <button className="btn meet">👥 Meet</button>
        <button className="btn skip">✕ Skip</button>
        
      </div>
           <div className="label">chats</div>
    </div>


    </div>
  );
};

export default LiinkkyMeet;
