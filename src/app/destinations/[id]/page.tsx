
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { notFound, useParams, useRouter } from 'next/navigation';
import { destinations } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { StarRating } from '@/components/star-rating';
import { Star, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/hooks/use-auth';

export default function DestinationPage() {
  const { toast } = useToast();
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const id = params.id as string;
  const destination = destinations.find((d) => d.id === id);
  const [reviewRating, setReviewRating] = useState(0);

  if (!destination) {
    notFound();
  }
  
  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setReviewRating(0);
  };

  const handleBooking = () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: "Login Required",
        description: "Please login to proceed with bookings.",
      });
      router.push('/login');
      return;
    }
    // This is where you would handle the booking logic.
    // For now, we'll just show a toast notification.
    toast({
      title: "Booking Initiated!",
      description: `Your booking for ${destination.name} is in progress.`,
    });
    router.push('/bookings');
  }

  const mainImage = destination.images[0];
  const galleryImages = destination.images.slice(1);

  return (
    <div className="flex-1 bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold font-headline md:text-5xl">{destination.name}</h1>
          <p className="text-lg text-muted-foreground">{destination.location}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid gap-4">
              <Image
                src={mainImage.url}
                alt={`Main image of ${destination.name}`}
                width={800}
                height={534}
                className="w-full aspect-[3/2] object-cover rounded-lg shadow-lg"
                data-ai-hint="travel destination"
                priority
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, index) => (
                  <Image
                    key={index}
                    src={img.url}
                    alt={`Image ${index + 2} of ${destination.name}`}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                    data-ai-hint="scenic landscape"
                    priority={index < 2}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline">Book Your Stay</CardTitle>
                <CardDescription>Starting from</CardDescription>
                <p>
                  <span className="text-3xl font-bold">₹{destination.pricePerNight}</span>
                </p>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleBooking}>
                  Book Now
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Secure payments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold font-headline">About {destination.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline">Reviews</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(destination.rating) ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                ))}
              </div>
              <span className="font-semibold">{destination.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({destination.reviews.length} reviews)</span>
            </div>

            <div className="space-y-6">
              {destination.reviews.map((review) => (
                <div key={review.id} className="flex gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatarUrl} alt={review.author} />
                    <AvatarFallback><User/></AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{review.author}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                    <p className="mt-2 text-sm">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Leave a Review</CardTitle>
                <CardDescription>Share your experience with others.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleReviewSubmit}>
                  <div>
                    <p className="font-medium mb-2">Your Rating</p>
                    <StarRating rating={reviewRating} onRatingChange={setReviewRating} />
                  </div>
                  <Textarea placeholder="Write your review here..." rows={4} />
                  <Button type="submit" className="w-full">Submit Review</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
