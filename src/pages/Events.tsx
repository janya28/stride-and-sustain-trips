
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";

// Sample event data with expanded details
const eventsData = [
  {
    id: 1,
    title: "Boston Marathon",
    location: "Boston, Massachusetts, USA",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Running",
    distance: "Marathon",
    description: "The world's oldest annual marathon and one of the World Marathon Majors. The Boston Marathon ranks as one of the world's best-known road racing events.",
    registrationFee: "$205-$255",
    registrationDeadline: "September 15, 2024",
    participants: "30,000",
    difficulty: "Intermediate to Advanced",
  },
  {
    id: 2,
    title: "Ironman World Championship",
    location: "Kona, Hawaii, USA",
    date: "October 12, 2025",
    image: "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Triathlon",
    distance: "Full Ironman",
    description: "The annual culmination of the global Ironman triathlon series. Athletes must complete a 2.4-mile swim, 112-mile bicycle ride, and 26.22-mile marathon run.",
    registrationFee: "$1,100",
    registrationDeadline: "Qualification required",
    participants: "2,500",
    difficulty: "Elite",
  },
  {
    id: 3,
    title: "CrossFit Games",
    location: "Madison, Wisconsin, USA",
    date: "July 28, 2025",
    image: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "CrossFit",
    distance: "Various",
    description: "The CrossFit Games are the ultimate test of fitness. Athletes compete in a series of challenges that are revealed just before the events.",
    registrationFee: "$20 (Open)",
    registrationDeadline: "February 2025",
    participants: "40 individuals, 40 teams",
    difficulty: "Elite",
  },
  {
    id: 4,
    title: "Berlin Marathon",
    location: "Berlin, Germany",
    date: "September 28, 2025",
    image: "https://images.unsplash.com/photo-1517930287309-3d5137e246a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Running",
    distance: "Marathon",
    description: "One of the fastest marathon courses in the world, known for its flat profile, even surface, and mild autumn temperatures.",
    registrationFee: "€125",
    registrationDeadline: "June 30, 2024",
    participants: "45,000",
    difficulty: "All levels",
  },
  {
    id: 5,
    title: "Challenge Roth",
    location: "Roth, Germany",
    date: "July 6, 2025",
    image: "https://images.unsplash.com/photo-1520093416449-fbc06e89e64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Triathlon",
    distance: "Full Distance",
    description: "Challenge Roth is one of the largest long-distance triathlon events in the world with one of the fastest recorded finish times.",
    registrationFee: "€675",
    registrationDeadline: "January 2025",
    participants: "3,400",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Chicago Marathon",
    location: "Chicago, Illinois, USA",
    date: "October 5, 2025",
    image: "https://images.unsplash.com/photo-1553969241-9930f76b7963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Running",
    distance: "Marathon",
    description: "A flat and fast World Marathon Major that starts and finishes in Grant Park and runs through 29 neighborhoods.",
    registrationFee: "$230",
    registrationDeadline: "December 2024 (lottery)",
    participants: "45,000",
    difficulty: "All levels",
  },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("");

  // Filter events based on search term and event type
  const filteredEvents = eventsData.filter(event => {
    return (
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (eventType === "" || event.type.toLowerCase() === eventType.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="bg-athletic-blue-dark text-white py-12">
        <div className="athletic-container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Find Athletic Events</h1>
          <p className="text-lg max-w-2xl">Discover competitions, races, and sporting events around the world. Plan your training and travel schedule accordingly.</p>
        </div>
      </div>
      
      <div className="athletic-container py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <label htmlFor="search" className="block text-sm font-medium mb-1">Search events</label>
              <Input
                id="search"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:col-span-4">
              <label htmlFor="type" className="block text-sm font-medium mb-1">Event type</label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="All event types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All event types</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="triathlon">Triathlon</SelectItem>
                  <SelectItem value="cycling">Cycling</SelectItem>
                  <SelectItem value="crossfit">CrossFit</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3">
              <Button className="w-full bg-athletic-blue hover:bg-athletic-blue-dark">
                Search Events
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <Card key={event.id} className="card-hover overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-athletic-blue">{event.type}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>{event.location}</span>
                  <span className="font-medium">{event.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 line-clamp-3">{event.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                    <div>
                      <span className="block text-gray-500">Distance:</span>
                      <span>{event.distance}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Fee:</span>
                      <span>{event.registrationFee}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Difficulty:</span>
                      <span>{event.difficulty}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Participants:</span>
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No events found matching your search criteria.</p>
            <Button 
              variant="link" 
              className="mt-2 text-athletic-blue"
              onClick={() => { setSearchTerm(""); setEventType(""); }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;
