// src/app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-900" />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 text-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}