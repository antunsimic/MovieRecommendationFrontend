import React, { useEffect, useState } from "react";
import '../main.css'
import 'animate.css';
import TMDBlogo from "./TMDBlogo";
import About from "./About";

function shortenText(input) {
  if (input.length <= 200) return input; // Return as is if 200 characters or less
  let shortText = input;
  [".", ",", ";"].forEach((punct) => {
    let cutoffIndex = shortText.indexOf(punct, 200);
    shortText = cutoffIndex !== -1 ? shortText.substring(0, cutoffIndex + 1) : shortText; 
  })
  // Find the first "." after the 200th character

  return shortText + "..."; // Return up to and including the period, or full string if no period found
}



function TVGrid(props) {
  const [showTitle, setShowTitle] = useState(false)
  const [showDescription, setShowDesciption] = useState(false)
 // const movie = movies.find((movie) => movie.title === "Black Cat, White Cat")
  let description = "";
  let title = "";
  let url = "";



  useEffect(() => {
    if (!props.movie) {
    //  setIsLoading(true); // Set loading state if movie is not yet available

      return; // Exit if no movie yet
    }

    // Movie is available; process it
  //  setIsLoading(false);
    setShowDesciption(false);
    setShowTitle(false);

    const titleTimeout = setTimeout(() => setShowTitle(true), 1000);
    const descriptionTimeout = setTimeout(() => setShowDesciption(true), 2000);
  
    // Cleanup timeouts when movie changes or component unmounts
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(descriptionTimeout);
    };

  }, [props.movie])
  if (!props.isLoading) {
    if (!["Slow down!", "No movie found"].includes(props.movie.title)) {
    description = shortenText(props.movie.overview)
    title = props.movie.title + " (" + props.movie.release_date.substring(0, 4) + ")"
    url = `url('https://image.tmdb.org/t/p/original${props.movie.backdrop_path ? props.movie.backdrop_path : props.movie.poster_path }')`
    }
    else {
      title = props.movie.title;
      description = props.movie.overview;
      url = `url('${props.movie.backdrop_path}')`

    }

   }

  return <div id="TVGrid" >
    <div id="Screen" style={{backgroundImage: props.isLoading ? `url('/images/static_noise.gif')` : url }} >
       
  { !props.isLoading && showDescription && <span id="Description"  >{description}</span> }
   { !props.isLoading && showTitle && <span id="Title" >{title}</span> }
      

    </div>
    <div id="ControlButtons" >
    <TMDBlogo />
    <About />
    </div>
  </div>;
}


export default TVGrid;