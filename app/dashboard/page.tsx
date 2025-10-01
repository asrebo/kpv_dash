import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import Network from "@/components/network"
import Obvestila from "@/components/obvestila"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


import  MapComp  from "@/components/ui/map"

import data from "./racuni1.json"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        
          <div className="@container/main w-full flex flex-col gap-6 px-6 py-6 lg:px-6">
          
              <SectionCards />
              
                <ChartAreaInteractive />
               
              
                 <div className=" grid grid-cols-3 gap-4" >
              <MapComp />
              <Network />
              <Obvestila />
              </div>
         
             <div className=" " >
               
                <DataTable data={data} />
              </div>
           
          </div>
         
        
      </SidebarInset>
    </SidebarProvider>
  )
}
