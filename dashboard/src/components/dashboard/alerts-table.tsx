"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAlerts, Alert } from "@/hooks/use-alerts";
import { AlertDetailModal } from "./alert-detail-modal";

export function AlertsTable() {
  const alerts = useAlerts();

  return (
    <div className="rounded-md border border-slate-800 bg-slate-900">
      <Table>
        <TableHeader>
          <TableRow className="border-slate-800 hover:bg-transparent">
            <TableHead className="text-slate-400">Time</TableHead>
            <TableHead className="text-slate-400">Type</TableHead>
            <TableHead className="text-slate-400">Source IP</TableHead>
            <TableHead className="text-slate-400">Severity</TableHead>
            <TableHead className="text-right text-slate-400">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((alert) => (
            <TableRow key={alert.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
              <TableCell className="font-mono text-xs">{new Date(alert.timestamp).toLocaleTimeString()}</TableCell>
              <TableCell className="font-medium">{alert.type}</TableCell>
              <TableCell>{alert.sourceIp}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                  alert.severity === 'critical' ? 'bg-red-500/10 text-red-500' :
                  alert.severity === 'high' ? 'bg-orange-500/10 text-orange-500' :
                  'bg-blue-500/10 text-blue-500'
                }`}>
                  {alert.severity}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <AlertDetailModal alert={alert} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}