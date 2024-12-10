import { db } from '@/service/firebaseConfig';
import { doc,getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoSection from '../components/infoSection';
import Hotels from '../components/Hotels';
import DailyPlan from '../components/DailyPlan';
import { useGoogleLogin } from '@react-oauth/google';

const Viewtrip = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever this component is rendered
  }, []);

  const {tripId}=useParams();
  const [trip,setTrip]=useState([]);


  useEffect(()=>{
    tripId && getTripData();
  },[tripId])

    //To get user information//

  const getTripData=async()=>{
    const docref=doc(db,'AITrips',tripId);
    const docSnap=await getDoc(docref);

    setTrip(docSnap.data());

    console.log(docSnap.data());
    
  }

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip}/>
      <Hotels trip={trip}/>
      <DailyPlan trip={trip}/>
    </div>
  )
}

export default Viewtrip
