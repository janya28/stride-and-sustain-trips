
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample destination data
const destinations = [
  {
    id: 1,
    name: "Boulder, Colorado",
    image: "https://images.unsplash.com/photo-1619452427878-c37f49b7cbe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    features: ["High altitude training", "Trail running", "Road cycling", "Rock climbing"],
    description: "A mecca for endurance athletes with high-altitude training opportunities and miles of running and biking trails."
  },
  {
    id: 2,
    name: "San Diego, California",
    image: "https://images.unsplash.com/photo-1566566084560-3e769b26862d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80",
    features: ["Year-round training", "Open water swimming", "Beach workouts", "Trail running"],
    description: "Perfect year-round weather for outdoor training with beautiful beaches for swimming and running."
  },
  {
    id: 3,
    name: "Mallorca, Spain",
    image: "https://images.unsplash.com/photo-1591801096898-c99f526e4cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: ["Cycling paradise", "Swimming in Mediterranean", "Hill climbing", "Training camps"],
    description: "A cycling paradise with challenging climbs, smooth roads, and breathtaking scenery."
  },
  {
    id: 4,
    name: "Gold Coast, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    features: ["Swimming facilities", "Triathlon training", "Surf sports", "Beach running"],
    description: "World-class aquatic facilities, running paths, and triathlon training venues with stunning ocean views."
  }
];

const DestinationHighlights = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="athletic-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Top Athlete Destinations</h2>
          <Link to="/destinations">
            <Button variant="outline">View All Destinations</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(destination => (
            <Card key={destination.id} className="card-hover overflow-hidden">
              <div className="h-40">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{destination.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 mb-3">
                  {destination.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-athletic-green mr-2"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Explore</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationHighlights;
