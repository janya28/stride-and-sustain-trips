
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Sample destination data
const destinationsData = [
  {
    id: 1,
    name: "Boulder, Colorado",
    country: "United States",
    image: "https://images.unsplash.com/photo-1619452427878-c37f49b7cbe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    sportTypes: ["Running", "Cycling", "Triathlon", "Hiking"],
    features: ["High altitude training", "Trail running", "Road cycling", "Rock climbing"],
    description: "A mecca for endurance athletes with high-altitude training opportunities and miles of running and biking trails.",
    trainingFacilities: ["Boulder Reservoir", "Flatirons Vista Trail", "Boulder Creek Path"],
    altitude: "5,328 ft (1,624 m)",
    bestSeasons: "Spring, Summer, Fall",
  },
  {
    id: 2,
    name: "San Diego, California",
    country: "United States",
    image: "https://images.unsplash.com/photo-1566566084560-3e769b26862d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    sportTypes: ["Swimming", "Triathlon", "Running", "Surfing"],
    features: ["Year-round training", "Open water swimming", "Beach workouts", "Trail running"],
    description: "Perfect year-round weather for outdoor training with beautiful beaches for swimming and running.",
    trainingFacilities: ["La Jolla Cove", "Mission Bay", "Torrey Pines State Park"],
    altitude: "Sea level",
    bestSeasons: "Year-round",
  },
  {
    id: 3,
    name: "Mallorca, Spain",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1591801096898-c99f526e4cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    sportTypes: ["Cycling", "Swimming", "Running", "Triathlon"],
    features: ["Cycling paradise", "Swimming in Mediterranean", "Hill climbing", "Training camps"],
    description: "A cycling paradise with challenging climbs, smooth roads, and breathtaking scenery.",
    trainingFacilities: ["Sa Calobra climb", "Port de Pollença", "Alcúdia Bay"],
    altitude: "Varies, coastal to 1,445m (Puig Major)",
    bestSeasons: "Spring, Fall",
  },
  {
    id: 4,
    name: "Gold Coast, Australia",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    sportTypes: ["Swimming", "Triathlon", "Surfing", "Running"],
    features: ["Swimming facilities", "Triathlon training", "Surf sports", "Beach running"],
    description: "World-class aquatic facilities, running paths, and triathlon training venues with stunning ocean views.",
    trainingFacilities: ["Gold Coast Aquatic Centre", "Surfers Paradise beach", "Currumbin Creek"],
    altitude: "Sea level",
    bestSeasons: "Year-round (winter is mild)",
  },
  {
    id: 5,
    name: "Flagstaff, Arizona",
    country: "United States",
    image: "https://images.unsplash.com/photo-1601591190313-26a718968152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    sportTypes: ["Running", "Altitude training", "Hiking", "Mountain biking"],
    features: ["High altitude training", "Pine forests", "Trail running", "Olympic training site"],
    description: "Popular high-altitude training destination for elite distance runners, with extensive trail networks.",
    trainingFacilities: ["Buffalo Park", "Northern Arizona University track", "Coconino National Forest trails"],
    altitude: "6,909 ft (2,106 m)",
    bestSeasons: "Late spring, summer, early fall",
  },
  {
    id: 6,
    name: "Font Romeu, France",
    country: "France",
    image: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    sportTypes: ["Running", "Altitude training", "Nordic skiing", "Mountain sports"],
    features: ["High altitude center", "Olympic preparation", "Mountain trails", "Sports science facilities"],
    description: "One of Europe's premier altitude training destinations with world-class facilities and trails.",
    trainingFacilities: ["Centre National d'Entraînement en Altitude", "Pyrénées 2000 trails", "Lake Matemale"],
    altitude: "5,900 ft (1,800 m)",
    bestSeasons: "Summer for running, winter for Nordic skiing",
  },
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sportType, setSportType] = useState("");

  // Filter destinations based on search term and sport type
  const filteredDestinations = destinationsData.filter(destination => {
    return (
      (destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       destination.country.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (sportType === "" || destination.sportTypes.some(sport => sport.toLowerCase() === sportType.toLowerCase()))
    );
  });

  return (
    <Layout>
      <div className="bg-athletic-blue-dark text-white py-12">
        <div className="athletic-container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Athletic Destinations</h1>
          <p className="text-lg max-w-2xl">Discover the best locations for your sport with training facilities, athlete-friendly accommodations, and local resources.</p>
        </div>
      </div>
      
      <div className="athletic-container py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5">
              <label htmlFor="search" className="block text-sm font-medium mb-1">Search destinations</label>
              <Input
                id="search"
                placeholder="Search by name or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:col-span-4">
              <label htmlFor="type" className="block text-sm font-medium mb-1">Sport type</label>
              <Select value={sportType} onValueChange={setSportType}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="All sport types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All sport types</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="cycling">Cycling</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="triathlon">Triathlon</SelectItem>
                  <SelectItem value="altitude training">Altitude Training</SelectItem>
                  <SelectItem value="surfing">Surfing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3">
              <Button className="w-full bg-athletic-blue hover:bg-athletic-blue-dark">
                Search Destinations
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDestinations.map(destination => (
            <Card key={destination.id} className="card-hover flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 h-auto">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 flex flex-col">
                <CardHeader>
                  <CardTitle>{destination.name}</CardTitle>
                  <CardDescription>{destination.country}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">{destination.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-athletic-blue">Perfect for</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {destination.sportTypes.map((sport, idx) => (
                          <span 
                            key={idx} 
                            className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="block text-gray-500">Altitude:</span>
                        <span>{destination.altitude}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Best seasons:</span>
                        <span>{destination.bestSeasons}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Explore Facilities</Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No destinations found matching your search criteria.</p>
            <Button 
              variant="link" 
              className="mt-2 text-athletic-blue"
              onClick={() => { setSearchTerm(""); setSportType(""); }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Destinations;
