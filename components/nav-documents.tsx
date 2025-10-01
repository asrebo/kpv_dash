"use client"

import Link from 'next/link'

import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"

import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { Leaf, Calculator, Calendar, FileQuestionMark } from 'lucide-react';

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pridobi dodatna sredstva</SidebarGroupLabel>
  <SidebarMenuItem className='flex flex-col gap-2'>
        <a href="./gogreen">
            <SidebarMenuButton className="bg-white p-6">
                <Image src="/kolo.png" alt="Go Green" width={32} height={32} className="inline" />
                {"Kolo"}
            </SidebarMenuButton>
        </a>
        <a href="./kalkulator">
            <SidebarMenuButton className="bg-white p-6">
                  <Image src="/kalk.png" alt="Go Green" width={32} height={32} className="inline" />
                <span>{"Kalkulator"}</span>
            </SidebarMenuButton>
        </a>
        <a href="./kviz">
            <SidebarMenuButton className="bg-white p-6">
                   <Image src="/kviz.png" alt="Go Green" width={32} height={32} className="inline" />
                <span>{"Kviz"}</span>
            </SidebarMenuButton>
        </a>
        <a href="./dogodki">
            <SidebarMenuButton className="bg-white p-6">
                 <Image src="/dog.webp" alt="Go Green" width={32} height={32} className="inline" />
                <span>{"Dogodki"}</span>
            </SidebarMenuButton>
        </a>
    </SidebarMenuItem>
    </SidebarGroup>
  )
}
