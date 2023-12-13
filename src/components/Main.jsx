import React, { useEffect, useState } from "react";
import requests from "../Requests";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import axios from "axios";
import {useVideoContext} from '../context/VedioTitleContext'

function Main() {
  const [movies, setMovies] = useState([]);
  const [vedioUrl,setVedioUrl] = useState('')
  const {videoTitle,setContextVideoTitle,currentMovie,setCurrentMovieContext ,videoStatus,setVedioStatusContext} = useVideoContext()
  

  const movie = currentMovie !== null ? currentMovie : movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  },[]);

  useEffect(()=>{
      if(videoTitle)handleVedio(videoTitle)
  },[videoTitle])
 
 
  const truncateString = (str,num)=>{
    return str?.length > num ? str.slice(0,num) + '...' : str
  }

  const handleVedio = async (title) => {
    setContextVideoTitle(title)
    movieTrailer(videoTitle).then((url)=>{
      setVedioStatusContext()
      const urlKey = url.split('=')
      setVedioUrl(urlKey[1])
    })
  }
  
  const handleClose = () => {
    setVedioStatusContext()
    setVedioUrl('');
  }

  const vedioControlls = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full h-[550px] text-white">
      { !videoStatus ? 
        <div className="w-full h-full">
        <div className=" absolute w-full h-[550px]  bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4  md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button onClick={()=>handleVedio(movie?.title)} className="border bg-gray-300 py-2 border-gray-300 text-black  px-5">
              Play
            </button>
            <button className="border py-2 text-white px-5 ml-4">
              Watch Later{" "}
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released :{movie?.release_date}</p>
          <p className=" w-full md:max-w-[70%]: lg:md:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview,150)}</p>
        </div>
      </div> : <>
         
            <YouTube videoId={vedioUrl} opts={vedioControlls} />
            <button onClick={handleClose} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-5 bg-gray-800 text-white py-1 rounded opacity-50 px-10">
            Close
          </button>
         
        </>
     }
    </div>
  );
}

export default Main;
