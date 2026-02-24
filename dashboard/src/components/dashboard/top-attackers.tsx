import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const attackers = [
  { ip: "45.12.33.101", count: 1240, country: "Russia", flag: "🇷🇺" },
  { ip: "103.4.21.5", count: 890, country: "China", flag: "🇨🇳" },
  { ip: "185.22.1.44", count: 432, country: "Netherlands", flag: "🇳🇱" },
  { ip: "202.10.44.3", count: 210, country: "Unknown", flag: "🏴‍☠️" },
];

export function TopAttackers() {
  return (
    <Card className="bg-slate-900 border-slate-800 col-span-4">
      <CardHeader>
        <CardTitle className="text-slate-100">Top Threat Actors</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800">
              <TableHead className="text-slate-400">Source IP</TableHead>
              <TableHead className="text-slate-400">Origin</TableHead>
              <TableHead className="text-right text-slate-400">Total Alerts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attackers.map((actor) => (
              <TableRow key={actor.ip} className="border-slate-800">
                <TableCell className="font-mono">{actor.ip}</TableCell>
                <TableCell>
                  <span className="mr-2">{actor.flag}</span>
                  {actor.country}
                </TableCell>
                <TableCell className="text-right font-bold text-blue-500">
                  {actor.count.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}