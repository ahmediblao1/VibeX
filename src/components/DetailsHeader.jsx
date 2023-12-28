/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId].attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex gap-5 items-center">

        <p className=" font-bold sm:text-3xl text-xl text-white">
          {artistId ? artist.name : songData?.title }
        </p>
      </div>
    </div>
  );
};
export default DetailsHeader;
