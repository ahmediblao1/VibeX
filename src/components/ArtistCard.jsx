import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-[240px] p-4 bg-white/5 bg-opacity-80
   backdrop-blur-sm animate-slideup rounded-lg cursor-pointer "
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img src={track?.images?.coverart} alt={track.subtitle} className=" w-full h-56 rounded-lg" />
      <h3 className="text-lg font-bold text-white mt-4">{track.subtitle}</h3>

    </div>

  );
};

export default ArtistCard;
