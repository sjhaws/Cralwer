import React from "react";

const Spritechar = ({x, y, health}) => {
   
 let styles = {
   height: '20px'
 }  

  return(
    <div>
      <img src='https://www.nicepng.com/png/full/224-2248272_pixilart-four-swords-link-sprite.png' style={styles}/>
    </div>
  )
}


export default Spritechar;