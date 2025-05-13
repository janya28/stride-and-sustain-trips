
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample event data
const events = [
  {
    id: 1,
    title: "Boston Marathon",
    location: "Boston, MA",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Running",
    description: "One of the world's oldest annual marathons and one of the six World Marathon Majors."
  },
  {
    id: 2,
    title: "Ironman World Championship",
    location: "Kona, Hawaii",
    date: "October 12, 2025",
    image: "https://images.unsplash.com/photo-1530143584546-02191bc84eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "Triathlon",
    description: "The annual culmination of the global Ironman triathlon series owned by the World Triathlon Corporation."
  },
  {
    id: 3,
    title: "CrossFit Games",
    location: "Madison, WI",
    date: "July 28, 2025",
    image: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    type: "CrossFit",
    description: "An athletic competition that crowns the Fittest on Earth through testing competitors in various workouts."
  }
];

const FeaturedEvents = () => {
  return (
    <section className="athletic-container py-12 md:py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title">Featured Events</h2>
        <Link to="/events">
          <Button variant="outline">View All Events</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
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
              <CardTitle>{event.title}</CardTitle>
              <CardDescription className="flex justify-between">
                <span>{event.location}</span>
                <span>{event.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-athletic-orange hover:brightness-90">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
