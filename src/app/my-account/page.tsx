
"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function MyAccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);
  
  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved!",
      description: "Your profile information has been updated.",
    });
  };
  
  const handleLogout = async () => {
    await logout();
    router.push('/');
  }

  if (loading || !user) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">My Account</CardTitle>
          <CardDescription>View and edit your profile information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.photoURL ?? ''} />
              <AvatarFallback>
                <User className="h-10 w-10" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{user.displayName || "User"}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="displayName">Full Name</Label>
              <Input id="displayName" defaultValue={user.displayName || ""} />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="about">About Me</Label>
              <Textarea id="about" placeholder="Tell us a little bit about yourself" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={user.email || ""} disabled />
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSaveChanges}>Save Changes</Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
