/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

// eslint-disable-next-line padded-blocks
const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
 
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
  backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">

        <div className={`absolute inset-0 justify-center items-center bg-[#043B1D] bg-opacity-50 group-hover:flex
      ${activeSong?.title === song.title ? 'flex bg-[#043B1D] bg-opacity-70' : 'hidden'} `}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-bold text-white text-lg truncate ">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-100 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : 'topartist'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>

  );
};

export default SongCard;
