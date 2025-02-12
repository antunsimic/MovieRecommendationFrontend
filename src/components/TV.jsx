import React from "react";
import '../main.css'
import TVGrid from "./TVGrid"



function TV(props) {
  return <div id="TV"  >
    
    <img src="/images/empty_screen_tv.png" alt="TV" />
    
    <TVGrid isLoading={props.isLoading} movie={props.movie} />  
  </div>;
}


export default TV;