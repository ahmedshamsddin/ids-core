"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ShieldAlert, BarChart3, Settings, LogOut } from "lucide-react";
import { logout } from "@/lib/auth";

const navItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Real-time Alerts", href: "/alerts", icon: ShieldAlert },
  { name: "Traffic Analysis", href: "/analytics", icon: BarChart3 },
  { name: "System Settings", icon: Settings, href: "/settings" },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col h-full py-4", className)}>
      <div className="px-6 mb-8 text-xl font-bold tracking-tight text-blue-500">
        IDS CORE
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
              pathname === item.href 
                ? "bg-blue-600/10 text-blue-500" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            )}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="px-4 mt-auto">
        <button 
          onClick={() => logout()}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-slate-400 rounded-md hover:text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}