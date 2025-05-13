
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-athletic-blue-dark text-white">
      {/* Hero background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          backgroundPosition: "center 20%",
          opacity: 0.3
        }}
      />
      
      <div className="athletic-container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Travel Smarter, <span className="text-athletic-green">Train Better</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Find athlete-friendly accommodations, training facilities, and nutrition options while traveling to your next event.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/events">
              <Button size="lg" className="bg-athletic-orange hover:brightness-90 text-white">
                Find Events
              </Button>
            </Link>
            <Link to="/planner">
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10">
                Plan Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
