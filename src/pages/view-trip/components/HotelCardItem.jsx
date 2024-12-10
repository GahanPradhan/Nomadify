import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApis';
import React, { useEffect, useState, useMemo } from 'react';
import { ImageIcon, MapPin, Star, Eye } from 'lucide-react';

function HotelCardItem({ hotel, onViewDetails }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const GetPlacePhoto = async () => {
    if (!hotel?.name) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const data = { textQuery: `${hotel.name}, ${hotel.address}` };
      const result = await GetPlaceDetails(data);

      if (result?.places?.length > 0 && result.places[0].photos?.length > 0) {
        const photoName = result.places[0].photos[0].name;
        if (photoName) {
          const url = PHOTO_REF_URL.replace('{NAME}', photoName);
          setPhotoUrl(url);
        }
      }
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hotel) {
      GetPlacePhoto();
    }
  }, [hotel]);

  // Prepare map link
  const mapLink = useMemo(() => 
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel?.address)},${encodeURIComponent(hotel?.name)}`,
    [hotel?.address, hotel?.name]
  );

  const handleViewDetails = (e) => {
    e.preventDefault(); // Prevent the map link from opening
    if (onViewDetails) {
      onViewDetails(hotel);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-red-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={photoUrl || '/empty.jpg'} 
          alt={hotel?.name || "Hotel"} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = '/empty.jpg';
          }}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50 animate-pulse top-0 left-0 right-0 bottom-0">
            {/* Loading state */}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h3 className="text-base font-bold text-black mb-2 line-clamp-2 min-h-[48px]">
            {hotel?.name || "Unnamed Hotel"}
          </h3>
          
          <div className="space-y-2">
            {hotel?.address && (
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-red-600" />
                <span className="line-clamp-2">{hotel.address}</span>
              </div>
            )}
            
            <div className="flex items-center text-sm text-gray-700">
              <Star className="w-4 h-4 mr-2 text-red-600" />
              {hotel?.rating ? `${hotel.rating} stars` : "No rating available"}
            </div>
            
            {hotel?.priceInr && (
              <div className="text-sm font-medium text-black">
                ₹ {hotel.priceInr}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end items-center">
  <a 
    href={mapLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-300 ease-in-out"
  >
    <MapPin className="w-4 h-4 mr-2" />
    <span className="font-medium text-sm">View on Map</span>
  </a>
</div>
      </div>
    </div>
  );
}

export default HotelCardItem;