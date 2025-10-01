"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Send } from 'lucide-react';

import { DataTable } from '@/components/data-table';

import data from '@/app/dashboard/racuni1.json';

export default function UserProfile() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    alert('Support request submitted!');
    setFormData({ subject: '', message: '' });
  };

  return (
    <div className=" p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">User Profile</h1>
          <p className="text-slate-600">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="info">Uporabnik info</TabsTrigger>
            <TabsTrigger value="support">Podpora</TabsTrigger>
            <TabsTrigger value="settings">Računi</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Informacije o uporabniku</CardTitle>
                <CardDescription>Pregled uporabniških podatkov</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b">
                  <div className="w-80 ">
                    <img src="/kssena.webp" />
                  
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">uporabniški račun:</h3>
                    <p className="text-slate-600">25050415</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-slate-500" />
                    <div>
                      <Label className="text-sm text-slate-600">up.ime</Label>
                      <p className="text-base font-medium">Kssena</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-slate-500" />
                    <div>
                      <Label className="text-sm text-slate-600">Email</Label>
                      <p className="text-base font-medium">info@kssena.si</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-slate-500" />
                    <div>
                      <Label className="text-sm text-slate-600">Tel</Label>
                      <p className="text-base font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-slate-500" />
                    <div>
                      <Label className="text-sm text-slate-600">Lokacija</Label>
                      <p className="text-base font-medium">Koroška cesta 37 a</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full">Uredi profil</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Need help? Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What do you need help with?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your issue in detail..."
                      className="min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button onClick={handleSubmit} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-2">Other ways to reach us</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p> Email: support@example.com</p>
                    <p> Phone: +1 (800) 123-4567</p>
                    <p> Live Chat: Available 9am-5pm EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardContent>
                <div className="">
               <DataTable data={data} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}