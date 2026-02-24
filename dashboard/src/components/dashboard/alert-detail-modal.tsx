import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert } from "@/hooks/use-alerts";

export function AlertDetailModal({ alert }: { alert: Alert }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800">Investigate</Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Alert Details: <span className="text-blue-500">{alert.id}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-400">Attack Type</p>
              <p className="font-semibold">{alert.type}</p>
            </div>
            <div>
              <p className="text-slate-400">Severity</p>
              <p className={`font-semibold capitalize ${alert.severity === 'critical' ? 'text-red-500' : 'text-slate-100'}`}>
                {alert.severity}
              </p>
            </div>
            <div>
              <p className="text-slate-400">Source IP</p>
              <p className="font-mono">{alert.sourceIp}</p>
            </div>
            <div>
              <p className="text-slate-400">Destination IP</p>
              <p className="font-mono">{alert.destinationIp}</p>
            </div>
          </div>
          <div className="bg-slate-950 p-3 rounded border border-slate-800">
            <p className="text-xs text-slate-500 mb-2 font-mono">RAW PAYLOAD SUMMARY</p>
            <p className="text-xs font-mono break-all">{alert.summary}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}