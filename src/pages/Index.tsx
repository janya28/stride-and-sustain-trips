
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import DestinationHighlights from "@/components/home/DestinationHighlights";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedEvents />
      <DestinationHighlights />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
