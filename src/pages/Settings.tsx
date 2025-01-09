import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { Moon, Sun, Shield, UserX, Bell, Globe, Lock } from "lucide-react";

interface BlockedUser {
  id: string;
  name: string;
  avatar: string;
}

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [blockedUsers] = useState<BlockedUser[]>([
    { id: "1", name: "John Doe", avatar: "/placeholder.svg" },
    { id: "2", name: "Jane Smith", avatar: "/placeholder.svg" },
  ]);

  return (
    <div className="container mx-auto p-6 max-w-4xl animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-8">
        {/* Theme Settings */}
        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sun className="h-5 w-5" /> Appearance
          </h2>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" /> Privacy
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Public Profile</span>
              <Switch
                checked={publicProfile}
                onCheckedChange={setPublicProfile}
                className="data-[state=checked]:bg-primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Read Receipts</span>
              <Switch
                checked={readReceipts}
                onCheckedChange={setReadReceipts}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </div>
        </section>

        {/* Blocked Users */}
        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <UserX className="h-5 w-5" /> Blocked Users
          </h2>
          <ScrollArea className="h-[200px] rounded-md border">
            {blockedUsers.length > 0 ? (
              <div className="space-y-4 p-4">
                {blockedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <img src={user.avatar} alt={user.name} />
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      Unblock
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground p-4">No blocked users</p>
            )}
          </ScrollArea>
        </section>

        {/* Notifications */}
        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5" /> Notifications
          </h2>
          <div className="flex items-center justify-between">
            <span>Enable Notifications</span>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </section>

        {/* Language Settings */}
        <section className="bg-secondary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" /> Language
          </h2>
          <div className="flex items-center justify-between">
            <span>Language</span>
            <select className="bg-secondary text-white rounded-md p-2">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;