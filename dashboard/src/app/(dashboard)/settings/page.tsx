"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-100">System Settings</h1>
      
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-100">Engine Configuration</CardTitle>
          <CardDescription className="text-slate-400">Manage how the IDS engine monitors network traffic.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-200">Promiscuous Mode</Label>
              <p className="text-xs text-slate-500">Allow the engine to capture all packets on the network interface.</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label className="text-slate-200">Network Interface</Label>
            <Input defaultValue="eth0" className="bg-slate-800 border-slate-700" />
          </div>

          <div className="space-y-2">
            <Label className="text-slate-200">Alert Threshold (Packets/Sec)</Label>
            <Input type="number" defaultValue="1000" className="bg-slate-800 border-slate-700" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-100">Global Whitelist</CardTitle>
          <CardDescription className="text-slate-400">Ignore traffic from these trusted IP addresses.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Add IP (e.g. 192.168.1.1)" className="bg-slate-800 border-slate-700" />
            <Button className="bg-blue-600 hover:bg-blue-700">Add IP</Button>
          </div>
          <div className="text-sm font-mono text-slate-400 p-2 bg-slate-950 rounded border border-slate-800">
            127.0.0.1 (Localhost)
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="border-slate-800">Cancel</Button>
        <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
      </div>
    </div>
  );
}