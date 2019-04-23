import React from "react";

class Spritechar extends React.Component{
   
render(){
 let styles = {
   height: '20px'
 }  

  return(
    <div>
      <img src='https://www.clipartmax.com/png/middle/97-977571_minecraft-clipart-8-bit-legend-of-zelda-8-bit-link.png' style={styles}/>
    </div>
  )
}
}

export default Spritechar;