
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/data";
import { DestinationCard } from "@/components/destination-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const adventureDestinations = destinations.filter(d => d.tags?.includes('adventure'));
  const regularDestinations = destinations.filter(d => !d.tags?.includes('adventure'));

  const filteredDestinations = regularDestinations.filter(destination =>
    destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const carouselDestinations = destinations.slice(0, 5);

  return (
    <div className="flex-1">
      <section className="w-full">
        <Carousel 
          className="w-full" 
          opts={{ loop: true }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {carouselDestinations.map((destination) => (
              <CarouselItem key={destination.id}>
                <div className="relative h-[60vh] md:h-[80vh]">
                  <Image
                    src={destination.images[0].url}
                    alt={`Image of ${destination.name}`}
                    fill
                    style={{objectFit:"cover"}}
                    className="w-full h-full"
                    data-ai-hint="travel landscape"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <div className="space-y-4">
                       <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                        {destination.name}
                      </h1>
                      <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                        {destination.brief}
                      </p>
                      <Link href={`/destinations/${destination.id}`}>
                        <Button size="lg">Explore Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>

      <section id="destinations" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline">
              Featured Destinations
            </h2>
            <div className="w-full max-w-md">
               <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by city, state, or name..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <section id="adventures" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 font-headline">
            Adventures & Passes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventureDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
