
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "NeuralGen AI completely transformed our customer service workflow with their custom GPT implementation. Our response time improved by 70% and customer satisfaction is at an all-time high.",
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechVision Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote:
      "The machine learning solution NeuralGen AI built for our supply chain management has reduced costs by 35% and improved delivery accuracy to 99.8%. Simply outstanding results.",
    name: "Michael Chen",
    title: "Operations Director",
    company: "Global Logistics Inc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote:
      "Working with NeuralGen AI on our computer vision project was seamless. Their team understood our challenges and delivered a solution that exceeded our expectations.",
    name: "Jessica Rivera",
    title: "Innovation Lead",
    company: "NextGen Retail",
    avatar: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote:
      "The AI consulting services provided by NeuralGen helped us identify opportunities we hadn't even considered. Their strategic guidance has been invaluable to our growth.",
    name: "David Park",
    title: "CEO",
    company: "Futurescape Solutions",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="glass-card h-full flex flex-col p-8 text-left">
                <div className="flex-1">
                  <p className="italic text-charcoal-600 dark:text-wheat-300 mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 border-2 border-wheat-300 dark:border-charcoal-700">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-charcoal-800 dark:text-wheat-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-charcoal-600 dark:text-wheat-300">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0 h-10 w-10" />
          <CarouselNext className="static translate-y-0 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
