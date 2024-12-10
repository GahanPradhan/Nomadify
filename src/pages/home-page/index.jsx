import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles, Globe, Plane, MapPin, Calendar, Brain, Image, MessageSquare, NotebookPen, Globe2, Compass, Bell } from 'lucide-react';
import RotatingEarth from './components/RotatingEarth';
import RecentTrips from './components/RecentTrips';
import { useEffect } from 'react';

const DashboardHome = () => {
    const navigate = useNavigate(); // Step 1: Initialize the navigate function

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top whenever this component is rendered
    }, []);


   
  return (
    <div className="min-h-screen pt-16">
      {/* AI Assistant Floating Card */}
      <div className="max-w-6xl mx-auto mb-8">
        <Card className="bg-white border border-slate-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-red-600" />
                  <span className="text-sm font-medium text-red-600">AI Trip Assistant</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Where would you like to explore?</h2>
                <p className="text-slate-600 mb-4">Describe your dream destination or type of trip - We will create the perfect itinerary for you.</p>
                <div className="flex gap-4">
                  <Button onClick={()=>{navigate("/create-trip")}} className="bg-red-600 hover:bg-red-700 text-white transition-colors">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Start AI Planning
                  </Button>
                </div>
              </div>
              <div className="w-[350px] h-[350px] cursor-pointer">
                <RotatingEarth />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8 pt-9">
        <Card className="bg-white hover:shadow-lg transition-all cursor-pointer group">
          <CardContent onClick={()=>{navigate("/my-trips")}} className="p-6">
            <div  className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <NotebookPen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Questlog</h3>
                <p className="text-sm text-slate-500">Journal of your generated plans</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white hover:shadow-lg transition-all cursor-pointer group">
          <CardContent onClick={()=>{navigate("/image-detect")}} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Location Vision</h3>
                <p className="text-sm text-slate-500">Discover places from your photos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white hover:shadow-lg transition-all cursor-pointer group">
          <CardContent onClick={()=>{navigate("/create-trip")}} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Plan Trip</h3>
                <p className="text-sm text-slate-500">Explore new paths using</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trips Section */}
      <div className="max-w-6xl mx-auto mb-8 pt-5">
        <RecentTrips />
      </div>
    </div>
  );
};

export default DashboardHome;