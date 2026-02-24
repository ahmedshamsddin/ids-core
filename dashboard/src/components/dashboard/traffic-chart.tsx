"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", alerts: 12 }, { time: "04:00", alerts: 45 },
  { time: "08:00", alerts: 200 }, { time: "12:00", alerts: 80 },
  { time: "16:00", alerts: 150 }, { time: "20:00", alerts: 30 },
];

export function TrafficChart() {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-slate-100">Alerts Distribution (24h)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b" }}
              itemStyle={{ color: "#3b82f6" }}
            />
            <Line type="monotone" dataKey="alerts" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}