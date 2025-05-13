
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marathon Runner",
    location: "Chicago, IL",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "AthleTravel made my Boston Marathon trip so much easier. I found a hotel with a gym near the finish line and even connected with local running groups for pre-race training runs."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Triathlete",
    location: "San Francisco, CA",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "When preparing for Ironman, finding accommodations with both good swimming and cycling access is crucial. This platform helped me plan everything from training locations to nutrition."
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "CrossFit Athlete",
    location: "Austin, TX",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I travel to 6+ competitions a year and always use AthleTravel to find CrossFit boxes and athlete-friendly accommodations. Their nutrition suggestions are spot on too!"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Cyclist",
    location: "Denver, CO",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Finding safe cycling routes in new areas is always challenging. The route suggestions and local knowledge on AthleTravel have been invaluable during my training trips."
  },
];

const Testimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-athletic-blue-dark text-white py-12 md:py-16">
      <div className="athletic-container">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center">What Athletes Say About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 lg:col-start-3">
            <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-athletic-blue">
                    <img 
                      src={testimonials[activeTestimonialIndex].image} 
                      alt={testimonials[activeTestimonialIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="mb-4 text-lg italic">"{testimonials[activeTestimonialIndex].text}"</p>
                    <div>
                      <p className="font-semibold text-athletic-orange">{testimonials[activeTestimonialIndex].name}</p>
                      <p className="text-sm text-gray-300">{testimonials[activeTestimonialIndex].role}, {testimonials[activeTestimonialIndex].location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-white/20 hover:bg-white/10"
                onClick={prevTestimonial}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Button>
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-3 h-3 rounded-full p-0 ${index === activeTestimonialIndex ? 'bg-athletic-orange' : 'bg-white/30'}`}
                  onClick={() => setActiveTestimonialIndex(index)}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </Button>
              ))}
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-white/20 hover:bg-white/10"
                onClick={nextTestimonial}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
