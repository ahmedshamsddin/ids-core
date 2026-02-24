"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Port Scan", value: 400, color: "#3b82f6" },
  { name: "Brute Force", value: 300, color: "#ef4444" },
  { name: "SQL Injection", value: 200, color: "#f59e0b" },
  { name: "DDoS", value: 100, color: "#8b5cf6" },
];

export function AttackPieChart() {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-4 lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-slate-100">Threat Types</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b" }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}