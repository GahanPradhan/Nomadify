import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Loader2, MapPin, Wallet, Trash2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Link } from 'react-router-dom';
import { SelectTravelList } from '@/constants/options';
import { deleteTrip } from '@/service/firebase-services'; // Import deleteTrip function from firebase service
import toast from 'react-hot-toast'; // Import React Hot Toast
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApis';

const UserTripCardItem = ({ trip, onDelete }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // State to disable delete button during process



  const GetPlacePhoto = async () => {
    
    try {
      setIsLoading(true);
      const data = { textQuery: trip?.userSelection?.location?.label };
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
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteTrip(trip.id); // Assuming this is the Firebase delete function
      toast.success('Trip deleted successfully!'); // Toast for success
      onDelete(trip.id); // Notify parent to remove trip from UI
    } catch (error) {
      console.error('Error deleting trip:', error);
      toast.error('Error deleting trip. Please try again.'); // Toast for error
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  return (
    <>
      <Card className="mb-20 bg-gradient-to-br from-slate-50 to-red-50 border-none hover:shadow-lg transition-all">
        <CardContent className="p-6">
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-start justify-between w-full">
              <div className="flex items-start gap-2 min-w-0 max-w-[80%]">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-slate-500" />
                <h3 className="font-semibold text-lg leading-tight truncate">
                {trip?.userSelection?.location?.label?.split(/[,\-|•\/\(\)]/)[0]?.trim() || 'Unknown'} </h3>             </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium flex items-center gap-1 whitespace-nowrap">
                  <User className="h-3 w-3" />
                  {SelectTravelList.find((item) => item.people === trip?.userSelection?.traveler)?.title.split(' ')[0] || 'Unknown'}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50"
                  onClick={handleDelete}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg mb-4">
            {isLoading ? (
              <div className="flex h-[220px] w-full items-center justify-center bg-white/50">
                <Loader2 className="h-6 w-6 animate-spin text-red-600" />
              </div>
            ) : (
              <div className="w-full overflow-hidden rounded-xl border-2">
                <img
                  src={photoUrl || 'empty.jpg'}
                  className="object-cover w-full h-[220px]"
                  alt="Trip"
                />
                <div className="absolute inset-0 bg-red-900/10 transition-opacity group-hover:bg-red-900/20" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{trip.userSelection.noOfDays} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <span>{trip.userSelection.budget}</span>
              </div>
            </div>
            <Link to={`/view-trip/${trip?.id}`} className="block">
              <Button size="sm" className="w-full bg-white text-black hover:bg-red-600 hover:text-white">
                View Itinerary
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Trip</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this trip to {trip?.userSelection?.location?.label}?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={confirmDelete}
              disabled={isDeleting}
            >
              {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UserTripCardItem;
