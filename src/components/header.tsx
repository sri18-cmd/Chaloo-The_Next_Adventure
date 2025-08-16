
"use client";

import Link from "next/link";
import { Menu, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

export function Header() {
  const { user, loading, logout } = useAuth();
  const [isSheetOpen, setSheetOpen] = useState(false);
  
  const handleLogout = async () => {
    await logout();
  }

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={true}
        onClick={() => setSheetOpen(false)}
      >
        Destinations
      </Link>
    </>
  );

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-card border-b sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setSheetOpen(false)} prefetch={true}>
                    Chaloo
                    <span className="sr-only">Chaloo</span>
                  </Link>
                  {navLinks}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="flex items-center justify-center font-headline font-bold text-2xl text-primary" prefetch={false}>
          Chaloo
        </Link>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          {navLinks}
        </nav>
        
        {!loading && (
          <>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <UserCircle2 className="h-6 w-6" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/my-account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/bookings">Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost">
                  <Link href="/login" prefetch={false}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup" prefetch={false}>Sign Up</Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
