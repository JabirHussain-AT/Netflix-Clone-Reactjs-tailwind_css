import React, { useState } from "react";
import { FaHeart,FaRegHeart} from 'react-icons/fa'
import {useVideoContext} from '../context/VedioTitleContext'

function Movie({item,id}) {
    const [like,setLike] = useState(false)
    const {videoTitle, setContextVideoTitle,currentMovie,setCurrentMovieContext } = useVideoContext();

    const handleTitle =(title,item)=>{
    setContextVideoTitle(title)
    setCurrentMovieContext(item)
      console.log(videoTitle,"from movie")
    }

  return (
    <div onClick={()=>handleTitle(item?.title,item)} className="w-[50%] sm:w-[50%] md:w-[25%] pl-5 lg:w[25%px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="w-full h-full absolute top-0 left-2 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p /*onClick={()=>handleLike(id)}*/ className="">
          {like ? (
            <FaHeart className="absolute left-4 top-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute left-4 top-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
