import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import EnergyCalculator from '@/components/kalkulator';



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
         <EnergyCalculator />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
