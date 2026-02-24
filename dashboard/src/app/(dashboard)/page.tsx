import { StatsCards } from "@/components/dashboard/stats-cards";
import { TrafficChart } from "@/components/dashboard/traffic-chart";
import { AttackPieChart } from "@/components/dashboard/attack-pie-chart";
import { TopAttackers } from "@/components/dashboard/top-attackers";
import { AlertsTable } from "@/components/dashboard/alerts-table";

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-100">IDS Security Overview</h1>
      
      <StatsCards />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <TrafficChart />
        <AttackPieChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-100">Live Alert Stream</h2>
          <AlertsTable />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-100">Target Analytics</h2>
          <TopAttackers />
        </div>
      </div>
    </div>
  );
}