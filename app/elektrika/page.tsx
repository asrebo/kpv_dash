import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { ChartPieDonutText } from '@/components/piechart_el';
import { ChartBarInteractive } from '@/components/barchart_el';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SectionCards } from '@/components/section-cards-elek';



import Opomnik from '@/components/opomnik';



export default function Elektrika() {
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
          <div className="flex flex-row gap-4 py-4 md:gap-6 md:py-6 flex-1  sm:max-lg:flex-wrap">
            <ChartBarInteractive />
            <ChartPieDonutText />
          </div>
          <Opomnik />
        
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
