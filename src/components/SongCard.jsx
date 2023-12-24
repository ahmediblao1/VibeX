/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  const activesong = 'test';
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
  backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">

        <div className={`absolute inset-0 justify-center items-center
       bg-black bg-opacity-50 group-hover:flex
      ${activesong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}
        >
          <PlayPause />
        </div>
        <img alt="song_img" src={song.images?.coverart} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-bold text-white text-lg truncate ">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : 'topartist'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>

  );
};

export default SongCard;
