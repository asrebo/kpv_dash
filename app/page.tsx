"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

import Waves from "@/components/wawes";

export default function ShadcnLoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);



  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        // TODO: perform real authentication call here
        await router.push("/dashboard");
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden bg-sidebar">
      <Waves />
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="z-10 w-full max-w-md p-6"
      >
        <Card className="shadow-2xl">
          <CardHeader className="space-y-4 p-6 text-center">
            <div className="flex justify-center">
              <div className="inline-flex">
                <Image src="/kpv_logo.png" alt="KPV logo" width={96} height={96} priority />
              </div>
            </div>
            <CardTitle className="text-xl font-semibold">Dobrodošli nazaj</CardTitle>
            <CardDescription>Prijavite se v svoj račun za nadaljevanje.</CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading}>
              <div>
                <Label htmlFor="email">E-naslov</Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden={true} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vi@example.com"
                  
               
                    className="pl-10"
                    required
                    aria-label="E-naslov"
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Geslo</Label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden={true} />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                
                
                    className="pl-10"
                    required
                    aria-label="Geslo"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border" disabled={loading} />
                  <span>Zapomni si me</span>
                </label>
                <Link href="/forgot-password" className="text-sm hover:underline">
                  Pozabljeno geslo?
                </Link>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Prijavljanje..." : "Prijava"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Nimate računa? <Link href="/register" className="underline">Ustvarite ga</Link>
            </p>
          </CardContent>
        </Card>

        <p className="text-center mt-4 text-xs text-muted-foreground">
          Z nadaljevanjem se strinjate z našimi <Link href="/terms" className="underline">Pogoji uporabe</Link> in{" "}
          <Link href="/privacy" className="underline">Politiko zasebnosti</Link>.
        </p>
      </motion.div>
    </div>
  );
}
