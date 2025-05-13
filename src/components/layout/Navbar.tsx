
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="athletic-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-athletic-blue p-1 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M21 12h-4l-3-9-3 9H7"></path>
                <path d="M7 12v8h14v-8"></path>
                <path d="M7 12h14"></path>
              </svg>
            </div>
            <span className="text-xl font-heading font-bold text-athletic-blue-dark">AthleTravel</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/events" className="text-base font-medium hover:text-athletic-blue transition-colors">Events</Link>
          <Link to="/destinations" className="text-base font-medium hover:text-athletic-blue transition-colors">Destinations</Link>
          <Link to="/planner" className="text-base font-medium hover:text-athletic-blue transition-colors">Plan Trip</Link>
          {!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-athletic-blue hover:bg-athletic-blue-dark">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <Link to="/profile">
              <Button variant="ghost" className="rounded-full p-2">
                <span className="sr-only">Profile</span>
                <div className="h-8 w-8 rounded-full bg-athletic-blue text-white flex items-center justify-center">
                  AT
                </div>
              </Button>
            </Link>
          )}
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw]">
            <div className="grid gap-6 py-6">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl font-heading font-bold">AthleTravel</span>
              </Link>
              <div className="grid gap-4">
                <Link to="/events" className="text-base font-medium">Events</Link>
                <Link to="/destinations" className="text-base font-medium">Destinations</Link>
                <Link to="/planner" className="text-base font-medium">Plan Trip</Link>
                {!isLoggedIn ? (
                  <div className="grid gap-2 mt-4">
                    <Link to="/login">
                      <Button className="w-full" variant="outline">Log In</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full bg-athletic-blue hover:bg-athletic-blue-dark">Sign Up</Button>
                    </Link>
                  </div>
                ) : (
                  <Link to="/profile">
                    <Button className="w-full" variant="outline">My Profile</Button>
                  </Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
