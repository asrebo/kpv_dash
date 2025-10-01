"use client"


import { RollingText } from "@/components/ui/shadcn-io/rolling-text";
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeSwitcher } from '@/components/ui/shadcn-io/theme-switcher';
import { useTheme } from "next-themes"


export function SiteHeader() {
const { setTheme } = useTheme();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <RollingText 
  text="Nadzorna"
className="text-lg font-bold "
  transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
/>
        <div className="ml-auto flex items-center gap-2">
           <ThemeSwitcher defaultValue="light" onChange={setTheme} />
        </div>
      </div>
    </header>
  )
}
