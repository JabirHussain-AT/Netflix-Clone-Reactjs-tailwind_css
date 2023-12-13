import { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoStatus ,setvideoStatus] = useState(false)
  const [currentMovie,setCurrentMovie] = useState(null)
  
  const setContextVideoTitle = (title) => {
    setVideoTitle(title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setCurrentMovieContext = (movie) => {
    setCurrentMovie(movie)  
  };

  const setVedioStatusContext = () => {
    setvideoStatus(!videoStatus)  
  };

  return (
    <VideoContext.Provider value={{ videoTitle, setContextVideoTitle ,currentMovie,setCurrentMovieContext ,videoStatus ,setVedioStatusContext} }>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
