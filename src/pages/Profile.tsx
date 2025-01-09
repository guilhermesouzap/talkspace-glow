import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Edit, UserRound } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <Card className="border-none bg-zinc-900 text-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-[#00FFD1]">Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback>
                    <UserRound className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 rounded-full border-2 border-[#00FFD1] bg-zinc-900 text-[#00FFD1] hover:bg-zinc-800"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-zinc-400">john.doe@example.com</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Display Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Enter your display name"
                    className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                    defaultValue="John Doe"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#00FFD1]"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500"
                    defaultValue="john.doe@example.com"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#00FFD1]"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button 
                className="mt-6 w-full bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90"
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;