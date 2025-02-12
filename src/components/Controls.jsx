import React, {useState} from "react";
import '../main.css'
import Country from "./Country";
import Prominence from "./Prominence";
import Christmas from "./Christmas";
import Go from "./Go";

function checkChristmas(date) {
  if (date.getMonth() === 11 ) {
    return true

  }
  if (date.getMonth() === 0 && date.getDate() <= 10 ) {
    return true

  }
  return false
}

function Controls(props) {
  const [isSmall, setIsSmall] = useState(false)

 // const isChristmasTime = checkChristmas(new Date(2024, 11, 25))
  const isChristmasTime = checkChristmas(new Date())

  return <div id="Controls" >
    <Country country={props.country} setCountry={props.setCountry} setIsSmall={setIsSmall} prominence={props.prominence} setProminence={props.setProminence} />
    <Prominence isSmall={isSmall} prominence={props.prominence} setProminence={props.setProminence}  />
  { isChristmasTime &&  <Christmas christmas={props.christmas} setChristmas={props.setChristmas} /> }
    <Go getMovie={props.getMovie} />
  </div>;
}


export default Controls;