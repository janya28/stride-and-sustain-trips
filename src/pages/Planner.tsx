
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const Planner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [destination, setDestination] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const [trainingFacility, setTrainingFacility] = useState("");
  const [nutritionOption, setNutritionOption] = useState("");

  return (
    <Layout>
      <div className="bg-athletic-blue-dark text-white py-12">
        <div className="athletic-container">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Plan Your Athletic Trip</h1>
          <p className="text-lg max-w-2xl">Create a personalized travel plan that includes accommodations, training facilities, and nutrition options.</p>
        </div>
      </div>
      
      <div className="athletic-container py-8">
        <Tabs defaultValue="destination" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="destination">Destination</TabsTrigger>
            <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          
          <TabsContent value="destination">
            <Card>
              <CardHeader>
                <CardTitle>Select Your Destination</CardTitle>
                <CardDescription>Where are you traveling for your next athletic event?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger id="destination">
                        <SelectValue placeholder="Select a destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="boston">Boston, MA, USA</SelectItem>
                        <SelectItem value="boulder">Boulder, CO, USA</SelectItem>
                        <SelectItem value="kona">Kona, HI, USA</SelectItem>
                        <SelectItem value="san-diego">San Diego, CA, USA</SelectItem>
                        <SelectItem value="mallorca">Mallorca, Spain</SelectItem>
                        <SelectItem value="gold-coast">Gold Coast, Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date-range">Travel Dates</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date-range"
                          variant={"outline"}
                          className="w-full justify-start text-left font-normal"
                        >
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event">Event (Optional)</Label>
                  <Select>
                    <SelectTrigger id="event">
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boston-marathon">Boston Marathon</SelectItem>
                      <SelectItem value="ironman-kona">Ironman World Championship</SelectItem>
                      <SelectItem value="crossfit-games">CrossFit Games</SelectItem>
                      <SelectItem value="chicago-marathon">Chicago Marathon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes or Special Requirements</Label>
                  <Input id="notes" placeholder="E.g., Looking for quiet accommodations for pre-race rest" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save As Draft</Button>
                <Button className="bg-athletic-blue hover:bg-athletic-blue-dark">Continue to Accommodations</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="accommodations">
            <Card>
              <CardHeader>
                <CardTitle>Find Athlete-Friendly Accommodations</CardTitle>
                <CardDescription>Search for accommodations that meet your training needs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="accommodation-type">Accommodation Type</Label>
                    <Select value={accommodationType} onValueChange={setAccommodationType}>
                      <SelectTrigger id="accommodation-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="hostel">Hostel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price-range">Price Range</Label>
                    <Select>
                      <SelectTrigger id="price-range">
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy ($50-100/night)</SelectItem>
                        <SelectItem value="moderate">Moderate ($100-200/night)</SelectItem>
                        <SelectItem value="luxury">Luxury ($200+/night)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Required Amenities</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="gym" className="rounded text-athletic-blue" />
                      <label htmlFor="gym" className="text-sm">In-house Gym</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="pool" className="rounded text-athletic-blue" />
                      <label htmlFor="pool" className="text-sm">Swimming Pool</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="kitchen" className="rounded text-athletic-blue" />
                      <label htmlFor="kitchen" className="text-sm">Kitchen</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="laundry" className="rounded text-athletic-blue" />
                      <label htmlFor="laundry" className="text-sm">Laundry</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="near-trails" className="rounded text-athletic-blue" />
                      <label htmlFor="near-trails" className="text-sm">Near Trails</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="bike-storage" className="rounded text-athletic-blue" />
                      <label htmlFor="bike-storage" className="text-sm">Bike Storage</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Distance from Event</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="walking">Walking distance (≤ 1 mile)</SelectItem>
                      <SelectItem value="close">Close (1-3 miles)</SelectItem>
                      <SelectItem value="driving">Driving distance (3+ miles)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back to Destination</Button>
                <Button className="bg-athletic-blue hover:bg-athletic-blue-dark">Continue to Training</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle>Find Training Facilities</CardTitle>
                <CardDescription>Locate gyms, pools, tracks, and other training facilities at your destination.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="facility-type">Facility Type</Label>
                    <Select value={trainingFacility} onValueChange={setTrainingFacility}>
                      <SelectTrigger id="facility-type">
                        <SelectValue placeholder="Select facility type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gym">Gym</SelectItem>
                        <SelectItem value="pool">Swimming Pool</SelectItem>
                        <SelectItem value="track">Running Track</SelectItem>
                        <SelectItem value="trail">Trail Network</SelectItem>
                        <SelectItem value="crossfit">CrossFit Box</SelectItem>
                        <SelectItem value="cycling">Cycling Routes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="distance">Distance from Accommodation</Label>
                    <Select>
                      <SelectTrigger id="distance">
                        <SelectValue placeholder="Select distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="walking">Walking distance (≤ 1 mile)</SelectItem>
                        <SelectItem value="close">Close (1-3 miles)</SelectItem>
                        <SelectItem value="driving">Driving distance (3+ miles)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Features Needed</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="weights" className="rounded text-athletic-blue" />
                      <label htmlFor="weights" className="text-sm">Free Weights</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cardio" className="rounded text-athletic-blue" />
                      <label htmlFor="cardio" className="text-sm">Cardio Equipment</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="lap-pool" className="rounded text-athletic-blue" />
                      <label htmlFor="lap-pool" className="text-sm">Lap Pool</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="day-pass" className="rounded text-athletic-blue" />
                      <label htmlFor="day-pass" className="text-sm">Day Passes Available</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="24-hour" className="rounded text-athletic-blue" />
                      <label htmlFor="24-hour" className="text-sm">24-Hour Access</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="coaching" className="rounded text-athletic-blue" />
                      <label htmlFor="coaching" className="text-sm">Coaching Available</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="training-notes">Special Training Requirements</Label>
                  <Input id="training-notes" placeholder="E.g., Need access to a 400m track for interval training" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back to Accommodations</Button>
                <Button className="bg-athletic-blue hover:bg-athletic-blue-dark">Continue to Nutrition</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Options</CardTitle>
                <CardDescription>Find athlete-friendly nutrition options near your accommodations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nutrition-type">Nutrition Option Type</Label>
                    <Select value={nutritionOption} onValueChange={setNutritionOption}>
                      <SelectTrigger id="nutrition-type">
                        <SelectValue placeholder="Select option type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurants">Athletic-friendly Restaurants</SelectItem>
                        <SelectItem value="meal-prep">Meal Prep Services</SelectItem>
                        <SelectItem value="grocery">Grocery Stores</SelectItem>
                        <SelectItem value="delivery">Food Delivery Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="distance-food">Distance from Accommodation</Label>
                    <Select>
                      <SelectTrigger id="distance-food">
                        <SelectValue placeholder="Select distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="walking">Walking distance (≤ 1 mile)</SelectItem>
                        <SelectItem value="close">Close (1-3 miles)</SelectItem>
                        <SelectItem value="driving">Driving distance (3+ miles)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Dietary Preferences</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="high-protein" className="rounded text-athletic-blue" />
                      <label htmlFor="high-protein" className="text-sm">High Protein</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="vegan" className="rounded text-athletic-blue" />
                      <label htmlFor="vegan" className="text-sm">Vegan</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="vegetarian" className="rounded text-athletic-blue" />
                      <label htmlFor="vegetarian" className="text-sm">Vegetarian</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="gluten-free" className="rounded text-athletic-blue" />
                      <label htmlFor="gluten-free" className="text-sm">Gluten-Free</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="keto" className="rounded text-athletic-blue" />
                      <label htmlFor="keto" className="text-sm">Keto</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="paleo" className="rounded text-athletic-blue" />
                      <label htmlFor="paleo" className="text-sm">Paleo</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nutrition-notes">Nutrition Notes</Label>
                  <Input id="nutrition-notes" placeholder="E.g., Need high-carb options for days before event" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back to Training</Button>
                <Button className="bg-athletic-green hover:brightness-90 text-white">Create Travel Plan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Planner;
