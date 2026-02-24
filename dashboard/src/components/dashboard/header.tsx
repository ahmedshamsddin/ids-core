// src/components/dashboard/header.tsx
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <Input 
            placeholder="Search IPs, alerts, or logs..." 
            className="pl-10 bg-slate-800/50 border-slate-700 text-sm focus-visible:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
          AS
        </div>
      </div>
    </header>
  );
}