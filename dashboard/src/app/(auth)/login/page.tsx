"use client";
import { login } from "@/lib/auth";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    await login(formData);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950">
      <Card className="w-[350px] border-slate-800 bg-slate-900 text-slate-100">
        <CardHeader>
          <CardTitle className="text-xl text-center">IDS Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <Input 
                name="password"
                type="password" 
                placeholder="Enter password" 
                className="pl-10 bg-slate-800 border-slate-700"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Unlock Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}