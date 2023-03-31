import React from 'react'
import back from '../images/max-unsplash.jpg';
import right from '../images/mission.jpg';
import story from '../images/About_story.jpg';
import leader from '../images/About_leadership.jpg';

const styles={
   image:{
      top:0,
      width:"100%",
      height:"550px",
      marginTop:"0.5px",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
   },
   overHead:{
    position:"absolute",
    top: "45%",
    left: "27%",
    transform:"translate(-50%, -50%)",
    fontSize:"3rem",
    fontWeight:"700",
    color:"white",
    textAlign:"left"
   },
   container:{
     display:'flex',
     flexDirection:'row',
     overflow:"hidden"
   },
   left:{
     marginTop:"120px"
   },
   heading:{
    position:"relative",
    fontSize:"2.5rem",
    left:"-90px"  
   },
   para:{
      width:"550px",
      marginLeft:"150px",
    //   justifyContent:"center",
      textAlign:"left",
      fontSize:"20px",
      fontWeight:"400",
      fontFamily:"Georgia,Times,serif"
   },
   right:{
      position:"relative",
      width:"530px",
      height:"660px",
      marginTop:"160px",
      marginLeft:"200px",
      marginRight:"100px"
   },
   high:{
     fontWeight:"700",
     position:"relative",
     top:"20px"
   },
   low:{
     position:"relative",
     top:"35px"
   },
   story:{
      position:"relative",
      width:"600px",
      height:"450px",
      left:"-18px"
   },
   leader:{
    marginTop:"100px",
    width:"470px",
    height:"400px",
    marginLeft:"130px"
   },
   content:{
    position:"relative",
    width:"450px",
    // marginRight:"700px",
    left:"132px",
    textAlign:"left",
    fontSize:"20px",
    fontWeight:"400",
    fontFamily:"Georgia,Times,serif"
   },
   storyheading:{
    position:"relative",
    fontSize:"2.5rem",
    left:"-80px"   
   },
   valueheading:{
    position:"relative",
    fontSize:"2.5rem",
    left:"-220px",
    top:"20px"   
   },
   mission:{
    display:"flex",
    flexDirection:"column",
    paddingLeft:"170px"
   },
   storyRight:{
    marginTop:'90px'
   },
   valuecontent:{
    position:"relative",
    width:"450px",
    // marginRight:"700px",
    left:"-18px",
    textAlign:"left",
    fontSize:"20px",
    fontWeight:"400",
    fontFamily:"Georgia,Times,serif"
   }
};

function About() {
  return (
    <div>
       <img src={back} style={styles.image} alt=""/>
       <div style={styles.overHead}>Because your website's design<br/> reflects your business.</div>
       <div style={styles.container}>
          <div style={styles.left}>
            <h2 style={styles.heading}>
                Our Mission
            </h2>
            <p style={styles.para}>Ecommerce has transformative powers, and we believe everyone should be able to take part. But outdated solutions and overwhelmed systems create uncertainty and risk.<br/><br/>

<span style={styles.high}>We empower businesses to realize the full potential of eCommerce by making it safe, accessible, and frictionless.</span><br/><br/>

<span style={styles.low}> We've built an eCommerce risk management platform that allows online merchants to create trusted relationships with consumers. Leveraging machine learning, our platform aggregates data from many of the world’s largest online merchants and creates network effects that drive higher sales and generate cost savings for our merchants. By accurately identifying the individuals behind online interactions, our technology enables merchants to provide frictionless customer experiences.</span></p>
          </div>
          <div>
            <img style={styles.right} src={right} alt=" "/>
          </div>
       </div>

       <div style={styles.container}>
          <div style={styles.mission}>
            <img src={story} style={styles.story} alt=""/>
            <h2 style={styles.valueheading}>Our Values</h2>
            <p style={styles.valuecontent}>
            Eido Gal and Assaf Feldman created Riskified in 2013 to improve eCommerce for merchants and consumers. Shopping had changed dramatically, and legacy approaches couldn’t keep up. They believed there was a better way.<br/><br/>

            Riskified began as a fraud solution, helping merchants approve orders they would have declined. We now protect customers from malicious account takeover attacks, combat payment failures at checkout, help merchants block abuse while upholding consumer-friendly policies and more.<br/><br/>

            Our global team helps the world’s most-innovative eCommerce merchants eliminate risk and uncertainty from their business. We remain committed to expanding the transformative powers of commerce.
            </p>
          </div>

          <div style={styles.storyRight}>
            <h2 style={styles.storyheading}>Our Story</h2>
            <p style={styles.content}>
            Eido Gal and Assaf Feldman created Riskified in 2013 to improve eCommerce for merchants and consumers. Shopping had changed dramatically, and legacy approaches couldn’t keep up. They believed there was a better way.<br/><br/>

            Riskified began as a fraud solution, helping merchants approve orders they would have declined. We now protect customers from malicious account takeover attacks, combat payment failures at checkout, help merchants block abuse while upholding consumer-friendly policies and more.<br/><br/>

            Our global team helps the world’s most-innovative eCommerce merchants eliminate risk and uncertainty from their business. We remain committed to expanding the transformative powers of commerce.
            </p>
            <img src={leader} style={styles.leader} alt=""/>
          </div>
       </div>
    </div>
  )
}

export default About
