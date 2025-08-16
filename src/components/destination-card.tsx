
import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.id}`} prefetch={true}>
      <Card className="overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20">
        <CardHeader className="p-0">
          <Image
            src={destination.images[0].url}
            alt={`Image of ${destination.name}`}
            width={destination.images[0].width}
            height={destination.images[0].height}
            className="w-full h-48 object-cover"
            data-ai-hint="travel destination"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-bold font-headline">{destination.name}</h3>
          <p className="text-sm text-muted-foreground">{destination.location}</p>
          <p className="text-sm mt-2">{destination.brief}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="font-semibold">{destination.rating.toFixed(1)}</span>
            </div>
            <div className="font-bold text-lg">
              ₹{destination.pricePerNight}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
