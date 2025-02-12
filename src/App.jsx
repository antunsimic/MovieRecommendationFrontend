import React, {useEffect, useState} from "react";
import './main.css'
import TV from './components/TV'
import Controls from './components/Controls'
import all_countries from "./components/all_countries";
import NoMovie from "./components/NoMovie";





function App() {
  const [country, setCountry] = React.useState(all_countries.find((country) => country.iso === 'US'));
  const [prominence, setProminence] = React.useState('Well Known');
  const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
  const [christmas, setChristmas] = useState(false);
  const [noMovieFound, setNoMovieFound] = useState(false);

  async function getMovie() {
    setIsLoading(true)
    setMovie(null)

   const data = {
    country: country,
    prominence: prominence,
    christmas: christmas
  }
  let response;
  let result1;
  try {
    response = await fetch('https://antun-nodejs-d8745ba6f78d.herokuapp.com/movieBackend', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      } 
    })
    result1 = await response.json()

  } catch (error) {
    console.error(error);
    result1 = {
      backdrop_path: "/images/slow_down.jpg",
      title: "Slow down!",
      overview: "You're burning through movies too fast. I bet you didn't even read the title of that last one, let alone the description!",
    }
  }
  
  setNoMovieFound(false);
  if ( prominence === "Globally Recognized" && (result1.vote_count ?? 200 ) < 100)  {
     setTimeout(() => {
      setProminence("Locally Well Known")
      setNoMovieFound(true)}, 1);  // Use setTimeout to ensure re-render
    
  }
  
  //.log(result1)
  setMovie(result1)
  setIsLoading(false)
  }

    useEffect(() => {
     getMovie();
  
    }, [])
  


  return (
   <div id="App"> 
  { noMovieFound && <NoMovie country={country} christmas={christmas} /> }
    <TV isLoading={isLoading} movie={movie} />
    <Controls christmas={christmas} setChristmas={setChristmas} getMovie={getMovie} country={country} setCountry={setCountry} prominence={prominence} setProminence={setProminence} />
    </div>   

  )
}

export default App
