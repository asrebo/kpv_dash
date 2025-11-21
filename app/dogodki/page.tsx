import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Recycle,
  TreeDeciduous,
} from 'lucide-react';

import Image from 'next/image';

import { LottieAnimation1 } from '@/components/dogodki_anim';

export default function GogreenPage() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="@container/main flex flex-1 flex-col gap-2">
          <GreenEvents />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function GreenEvents() {
  const events = [
    {
      id: 1,
      title: 'Delavnica o solarnih panelih',
      date: '15. januar 2026',
      time: '14:00 - 17:00',
      location: 'Center za zelene tehnologije, Ljubljana',
      attendees: 45,
      description:
        'Naučite se, kako namestiti in vzdrževati solarne panele za svoj dom. Strokovnjaki vas bodo vodili skozi proces in delili nasvete za maksimalno energetsko učinkovitost.',
      category: 'Energetska učinkovitost',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Seminar o življenju brez odpadkov',
      date: '22. februar 2026',
      time: '10:00 - 13:00',
      location: 'Kulturni dom, Maribor',
      attendees: 68,
      description:
        'Odkrijte praktične strategije za zmanjšanje odpadkov v vsakdanjem življenju. Teme vključujejo kompostiranje, trajnostno nakupovanje in izdelavo ekoloških izdelkov.',
      category: 'Trajnost',
      icon: Recycle,
    },
    {
      id: 3,
      title: 'Mestna akcija sajenja dreves',
      date: '5. april 2026',
      time: '9:00 - 12:00',
      location: 'Park Tivoli, Ljubljana',
      attendees: 120,
      description:
        'Pridružite se nam pri sajenju 500 dreves po mestu za izboljšanje kakovosti zraka in ustvarjanje zelenih površin. Vsi materiali so zagotovljeni, prinesite le svoj entuzijazem!',
      category: 'Zelena iniciativa',
      icon: TreeDeciduous,
    },
  ];

  return (
    <div className=" p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <LottieAnimation1 />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Prihajajoči zeleni dogodki
          </h1>
          <p className="text-gray-600">
            Pridružite se nam pri pozitivnem vplivu na naše okolje
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-4" style={{ background: ` #7e5e52` }}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    {event.title}
                  </h2>
                  <div className="p-4 rounded text-white font-semibold">
                    <span className="font-thin">prejmeš</span> 12{' '}
                    <Image
                      src="/coin.png"
                      alt="Revenue"
                      width={40}
                      height={40}
                      className="inline"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{event.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar
                      className="w-5 h-5 mr-2"
                      style={{ color: '#c96442' }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Datum in čas</p>
                      <p className="text-sm">{event.date}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin
                      className="w-5 h-5 mr-2"
                      style={{ color: '#c96442' }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Lokacija</p>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users
                      className="w-5 h-5 mr-2"
                      style={{ color: '#c96442' }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Udeleženci</p>
                      <p className="text-sm">{event.attendees} prijavljenih</p>
                    </div>
                  </div>
                </div>

                <button
                  className="mt-6 w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  style={{ backgroundColor: '#ba522f' }}
                >
                  Prijavi se zdaj
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
