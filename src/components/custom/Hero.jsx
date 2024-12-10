import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../../assets/images/bg1.mp4';

function Hero() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const LoginCheck = () => {
    const user = localStorage.getItem("user");
    user ? navigate("/create-trip") : setOpenDialog(true);
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResp) => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResp.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${tokenResp.access_token}`,
              Accept: "application/json",
            },
          }
        );

        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/create-trip");
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            AI-Powered <span className="text-red-600">Travel Planning</span>
          </h1>
          <p className="text-xl opacity-80">
            Transform your travel dreams into intelligent, personalized journeys.
          </p>
          <Button 
            onClick={LoginCheck} 
            className="group relative px-8 py-3 rounded-full text-lg overflow-hidden bg-red-600 hover:bg-red-700 text-white"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:translate-y-[-110%]">
              Craft Your Voyage
            </span>
            <span className="absolute left-0 right-0 top-full z-10 transition-all duration-300 group-hover:translate-y-[-120%]">
              Embark Now
            </span>
          </Button>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="text-center">
                <img src="logo.svg" alt="Logo" className="mx-auto mb-4" />
                <h2 className="font-bold text-xl">Sign In with Google</h2>
                <p className="text-gray-600 text-sm">
                  Access your account securely with Google authentication.
                </p>
                <Button
                  onClick={login}
                  className="w-full mt-5 flex items-center gap-3 bg-black text-white hover:bg-gray-800"
                >
                  <FcGoogle className="h-6 w-6" /> Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Hero;