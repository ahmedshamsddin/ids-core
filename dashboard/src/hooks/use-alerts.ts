"use client";
import { useState, useEffect } from "react";

export type Alert = {
  id: string;
  timestamp: string;
  severity: "critical" | "high" | "medium" | "low";
  type: string;
  sourceIp: string;
  destinationIp: string;
  summary: string;
};

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // Initial mock data
    const types = ["Port Scan", "SQL Injection", "SSH Brute Force", "DDoS Path"];
    const severities: Alert["severity"][] = ["critical", "high", "medium", "low"];

    const interval = setInterval(() => {
      const newAlert: Alert = {
        id: Math.random().toString(36).substring(7),
        timestamp: new Date().toISOString(),
        severity: severities[Math.floor(Math.random() * severities.length)],
        type: types[Math.floor(Math.random() * types.length)],
        sourceIp: `192.168.1.${Math.floor(Math.random() * 255)}`,
        destinationIp: "10.0.0.5",
        summary: "Detected suspicious pattern in TCP flags.",
      };

      setAlerts((prev) => [newAlert, ...prev].slice(0, 50)); // Keep last 50
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return alerts;
}