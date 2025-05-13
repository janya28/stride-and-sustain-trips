
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="athletic-container py-16 md:py-24">
      <div className="bg-athletic-blue rounded-2xl overflow-hidden">
        <div className="relative p-8 md:p-12 text-white">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready for Your Next Athletic Adventure?</h2>
            <p className="text-lg md:text-xl mb-8">
              Join thousands of athletes who use AthleTravel to make their event travel seamless, training-friendly, and performance-optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-athletic-blue hover:bg-gray-100">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/destinations">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
