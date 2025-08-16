"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  className?: string;
}

export function StarRating({ rating, onRatingChange, className }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-6 h-6 cursor-pointer transition-colors",
            (hoverRating >= star || rating >= star)
              ? "text-accent fill-accent"
              : "text-muted-foreground/50"
          )}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
}
