import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Activity, Globe, Zap } from "lucide-react";

const stats = [
  { title: "Total Alerts", value: "2,543", icon: Activity, color: "text-blue-500" },
  { title: "Critical", value: "18", icon: ShieldAlert, color: "text-red-500" },
  { title: "Top Attacker", value: "192.168.1.42", icon: Globe, color: "text-orange-500" },
  { title: "Engine Status", value: "Healthy", icon: Zap, color: "text-green-500" },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}