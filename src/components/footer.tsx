import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold font-headline">Chaloo</h3>
            <p className="text-muted-foreground mt-2">Your next adventure starts here.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold font-headline">Contact</h3>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li><a href="mailto:info@chaloo.com" className="hover:text-primary">info@chaloo.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">+91 (123) 456-7890</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-headline">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Chaloo. All rights reserved.</p>
          <p>Designed by Sri Vasanth Vutukuri</p>
        </div>
      </div>
    </footer>
  );
}
