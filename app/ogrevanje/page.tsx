import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SectionCards } from '@/components/section-cards-og';
import ChartBarInteractive from '@/components/barchart_og';
import { ChartPieDonutText } from '@/components/piechart_og';

import Opomnik from '@/components/opomnik';

import MotionComp from '@/components/motioncomp';

export default function Ogrevanje() {
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
        <div className="@container/main w-full flex flex-col  px-4 py-4 lg:px-6">
          
            <SectionCards />
            <div className="flex flex-row gap-4 py-4 md:py-6 flex-1 flex-wrap">
              <ChartBarInteractive />
              <ChartPieDonutText />
            </div>
            <Opomnik />
            <MotionComp />
      
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
