import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApis";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, MapPin, ArrowUpRight } from "lucide-react";

function CardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  const searchQuery = place?.attraction
    ? `${place?.attraction}, ${place?.address}`
    : place?.meal
    ? `${place?.restaurant}, ${place?.address}`
    : place?.activity
    ? `${place?.activity}, ${place?.location || place?.address}`
    : place?.restaurant
    ? `${place?.restaurant}, ${place?.address}`
    : place?.address || "";

  const GetPlacePhoto = async () => {
    if (!searchQuery) return;

    try {
      const data = { textQuery: searchQuery };
      const result = await GetPlaceDetails(data);

      if (result?.places?.length > 0) {
        const photoName = result.places[0].photos[0]?.name;
        if (photoName) {
          const url = PHOTO_REF_URL.replace("{NAME}", photoName);
          setPhotoUrl(url);
        }
      }
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  useEffect(() => {
    if (place) {
      GetPlacePhoto();
    }
  }, [place]);

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-red-50 hover:border-red-100">
        {/* Image Overlay Container */}
        <div className="relative">
          {/* Image */}
          <div className="h-48 w-full overflow-hidden relative">
            <img
              src={photoUrl || '/empty.jpg'}
              alt={place?.attraction || place?.restaurant || place?.activity}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => { e.target.src = '/empty.jpg'; }}
            />
            
            {/* Explore Button */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">Explore Location</span>
                <ArrowUpRight className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 line-clamp-1 flex-grow pr-2">
              {place?.attraction || place?.restaurant || place?.activity}
            </h2>
            
            {place.ticketPrice && (
              <div className="flex items-center bg-red-50 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                <Ticket className="mr-1 text-red-500" size={14} />
                {place.ticketPrice}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600 line-clamp-2 h-10">
          <div>
          {(place?.description || place?.meal)?.split(';').map((item, index) => (
            <span key={index}>
              {item.trim()}
              {index !== (place?.description || place?.meal).split(';').length - 1 && '. '}
            </span>
          ))}
         </div> 
          </p>

          
        </div>
      </div>
    </Link>
  );
}

export default CardItem;