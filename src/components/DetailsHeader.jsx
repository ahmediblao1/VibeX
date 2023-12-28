/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId].attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex gap-5 items-center">
        <img
          alt="art"
          src={artistId ? artist.artwork?.url.replace('w', '400').replace('h', '400')
            : songData?.images?.coverart}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <p className=" font-bold sm:text-3xl text-xl text-white">
          {artistId ? artist.name : songData?.title }
        </p>
      </div>
    </div>
  );
};
export default DetailsHeader;
