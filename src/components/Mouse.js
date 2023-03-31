import React from 'react'
import rocket from '../images/rocket7.gif'
// import Rocket from './Rotate';

const styled={
    position: "absolute",
    top:0, 
    // left:'6rem',
    left:0,
    // marginTop:'6rem',
    height:'4rem', 
    width:'4rem',
    pointerEvents:'none',
    background: "var(--main-color)",
    // transform:'rotate(-23deg)',
    transition:'all 0.1s linear',
    // transitonDelay:'0.1ms',
    // transformOrigin:"left",
    transform: 'translate('-50%','-50%')',
    // transform:[{rotateY:'45deg'}],
    borderRadius: '50%'
}

function Mouse() {
  var body1 = document.getElementById('cursor1');

  // // var rocketArr=Array.from(body1);
  // var rocketStart=-100;
  // var rocketRange=300;

  // var mouseXStart=0;
  // var mouseXEnd=window.innerWidth-300;
  // var currXPos=0;
  // var fracXVal=0;

  // var mouseYEnd=window.innerWidth;
  // var currYPos=0;
  // var fracYVal=0;

  // var currXRange=mouseXEnd-mouseXStart;


  document.addEventListener('mousemove', function(e) {
  
  //   currXPos=e.offsetX-mouseXStart;
  //   fracXVal=currXPos/currXRange;

  //   currYPos=e.offsetY;
  //   fracXVal=currYPos/mouseYEnd;

  //   let rocketXCurrPos=rocketStart+(fracXVal*rocketRange);
  //   let rocketYCurrPos=rocketStart+(fracYVal*rocketRange);

  //   // rocketArr.forEach((currRocket)=>{
  //   //    currRocket.style.transform=`translate(${rocketXCurrPos}px),${rocketYCurrPos}px`;
  //   // })

  //   body1.style.transform="rotate("+ rocketXCurrPos + "deg)rotate("+ rocketYCurrPos + "deg)";
  //   body1.style.transform+="translate("+ mouseXStart + "px)translate("+ mouseXEnd +"px)";
  //   // body1.style.transform+="translateX("-50% -50%")";

    var left = e.pageX;
    var top = e.pageY;

    body1.style.left = left + 'px';
    body1.style.top = top + 'px';     
    
    var updateTransform=((left,top)=>{
      // left=left+350;
      // top=top-250;

      var style="rotate("+ left + "deg)rotate("+ top + "deg)";
      body1.style.transform=style;
    });
    
    // console.log(left,top);

    // if(left>600 && top<200)
    // {
    // }
    // // else if(left>800 && top<400)
    // // {
    // // }
    // else if(left>1200 && top<200)
    // {
    // }
    // else if(left>1300 && top<300)
    // {
    // }
    // else if(left<380 && left>300 && top<200)
    // {
    // }
    // else{
    //   updateTransform(left,top);
    // }
    if((left+top)>=360 || (left+top)>=(-360) || (left+top)>=180 || (left+top)>=-180)
    {
      console.log(left+top)
    }
    else{
      updateTransform(left,top);
    }

    // updateTransform(left,top);
})

 
  return (
    <div >
      <img onLoad={Mouse} style={styled} src={rocket} id="cursor1" alt=""/>
    </div>
  )
}

export default Mouse

