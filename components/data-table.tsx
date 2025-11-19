"use client"

import * as React from "react"
import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"

import Image from "next/image"
import { Zap, Thermometer, Droplet, Wallet } from 'lucide-react';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CSS } from "@dnd-kit/utilities"
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical,
  IconGripVertical,
  IconLayoutColumns,
  IconLoader,
  IconPlus,
  IconTrendingUp,
} from "@tabler/icons-react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import {  Pie, PieChart } from "recharts"
import { toast } from "sonner"
import { z } from "zod"

import { FileText } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const postavkaSchema = z.object({
  "Zap.": z.union([z.string(), z.number()]), // can be number or "SKUPAJ"
  "Storitev/opis": z.string(),
  "Količina": z.number(),
  "EM": z.string().optional(),
  "Cena brez DDV": z.number().optional(),
  "DDV%": z.number().optional(),
  "Cena z DDV": z.number().optional(),
  "Vredn. brez DDV": z.number(),
  "Vrednost DDV": z.number(),
  "Vrednost z DDV": z.number(),
});

const kategorijaSchema = z.array(postavkaSchema);

const racunSchema = z.object({
  mesec: z.string(),
  leto: z.number(),
  id: z.number(),
  SKUPAJ: z.object({
    "Količina": z.number(),
    "Vredn. brez DDV": z.number(),
    "Vrednost DDV": z.number(),
    "Vrednost z DDV": z.number(),
  }),
});

const mesecSchema = z.object({
  racun: racunSchema,
  ELEKTRIKA: kategorijaSchema,
  OGREVANJE: kategorijaSchema,
  VODA: kategorijaSchema,
});

export const schema = z.record(z.string(), mesecSchema);
type Mesec = z.infer<typeof mesecSchema>;




const columns: ColumnDef<Mesec>[] = [


  {
    accessorKey: "header",
    header: "Račun",
    
    cell: ({ row }) => {
      return (
      <div className="w-full flex flex-row items-center gap-2">
        <FileText />
       <TableCellViewer item={row.original} />
       </div>)
    },
    enableHiding: true,
  },
  {
    accessorKey: "type",
    header: "Storitve",
    cell: ({ row }) => (
      <div className="flex  gap-1 ">
        <Image src={"elec.svg"} alt="Invoice" width={22} height={22} />
        <Image src={"heat.svg"} alt="Invoice" width={22} height={22} />
        <Image src={"water.svg"} alt="Invoice" width={22} height={22} />
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
      
        {"Plačano"}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Znesek",
    cell: ({row}: {row: any}) => (
   
      Math.round(row.original.racun.SKUPAJ["Vrednost z DDV"] * 100) / 100 + " €"
    )
  },
]

function DraggableRow({ row }: { row: Row<Mesec> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.id as unknown as UniqueIdentifier,
  })

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

export function DataTable({
  data: initialData,
}: {
  data: any
}) {

  initialData = initialData.reverse(); 
  const [data, setData] = React.useState(() => initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map((row: Mesec) => String(row.racun.id)) || [],
    [data]
  )

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
     enableColumnResizing: true,
    getRowId: (row) => String(row.racun.id),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  // onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

 

  return (
    <Tabs
      defaultValue="outline"
      className="w-full flex-col justify-start gap-6"
    > 
      <div className="flex items-center justify-between px-4 lg:px-6">
        <h1 className="text-2xl font-bold">Računi</h1>
        <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="outline">Aktualni računi</TabsTrigger>
          <TabsTrigger value="past-performance">
            Zapadli 
          </TabsTrigger>
          <TabsTrigger value="key-personnel">
            Plačani 
          </TabsTrigger>
        </TabsList>
        
      </div>
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
            <Table >
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          
        </div>
        <div className="flex items-center justify-between px-4">
        
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Vrstic na stran:
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Stran {table.getState().pagination.pageIndex + 1} od{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Naslednja stran</span>
                <IconChevronsLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Pojdi na prejšnjo stran</span>
                <IconChevronLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Pojdi na naslednjo stran</span>
                <IconChevronRight />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Pojdi na zadnjo stran</span>
                <IconChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="past-performance"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent
        value="focus-documents"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
    </Tabs>
  )
}






const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;



function TableCellViewer({ item }: { item: any }) {
  const isMobile = useIsMobile()


const chartData = [
  { energent: "Elektrika", vrednost: item.ELEKTRIKA[9]["Vrednost z DDV"], fill: "#edd078ff" },
  { energent: "Ogrevanje", vrednost: item.OGREVANJE[5]["Vrednost z DDV"], fill: "var(--primary)" },
  { energent: "Voda", vrednost: item.VODA[11]["Vrednost z DDV"], fill: "#187cefff" },

];

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-foreground px-0">
          {item.racun.mesec}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>{item.racun.mesec}</DrawerTitle>
          <DrawerDescription>
            Prikaz podrobnosti računa ID: {item.racun.id}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto  text-sm">
          { 
            <>
        <ChartContainer 
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] w-full pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="vrednost" nameKey="energent" label={(props) => String(props.name)} />
          </PieChart>
        </ChartContainer>
 
            
              <Separator />
              <div className="grid gap-2 p-4">
                <div className="flex gap-2 leading-none font-medium">
                  Povečanje porabe za 5.2% v primerjavi z istim obdobjem lanskega leta{" "}
                  <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                 Preverite kako lahko z prejetimi žetoni znižate strošek mesečnega računa za energente.
                </div>
              </div>
              <Separator />

            </>
          }
         <InvoiceTable racun={item} />
        </div>
        <DrawerFooter>
         
          <DrawerClose asChild>
            <Button>Zapri</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
 const IconMap: any = {
    'Elektrika': Zap,
    'Ogrevanje': Thermometer,
    'Voda in Komunalne Storitve': Droplet,
  };

const InvoiceTable = ({ racun }: { racun: any }) => {
  if (!racun) {
    return <div className="p-6 text-center text-red-600 font-semibold bg-red-100 rounded-xl shadow-md">Ni podatkov o računu.</div>;
  }

  const {
    racun: invoiceDetails,
    ELEKTRIKA: electricity,
    OGREVANJE: heating,
    VODA: water,
  } = racun;

  // Funkcija za oblikovanje števil na dve decimalki
  const formatCurrency = (value: any) => {
    // Poskušamo parsati float, če je to mogoče
    const num = parseFloat(value);
    if (isNaN(num)) {
      return value; // Če ni številka, vrnemo originalno vrednost (npr. 'SKUPAJ')
    }
    // Uporabimo toFixed(2) za 2 decimalki in lokalno obliko za ločila (npr. pika)
    return `${num.toLocaleString('sl-SI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  };

  /**
   * Prikazuje podatke kot vertikalno zložene sezname (kartice),
   * primerno za ozke prikaze (sidebar, mobilni telefon).
   */
  const renderTable = (data: any, title: any) => {
    if (!data || data.length === 0) {
      return null;
    }
 const IconComponent = IconMap[title] ;
    // Zadnji element je vedno vsota (SKUPAJ)
    const totalRow = data[data.length - 1];
    const items = data.slice(0, -1);
    
    // Uporabljamo Tailwind klase za prilagojeno list-style oblikovanje
    return (
      <div className="mb-6 p-2  rounded-xl  w-full transition duration-300 ">
       
        <h2 className="text-lg font-bold mb-3 text-gray-800 border-b pb-2 flex items-center gap-1">
           {<IconComponent size={20} />}
          {title}
          </h2>
        <div className="space-y-3"> 
          {/* Prikaz posameznih postavk kot vertikalno zložene kartice */}
          {items.map((item: any, index: number) => (
            <div key={index} className="p-3 bg-white rounded-lg border border-gray-200 transition duration-150">
                
                {/* Glavna vrstica: Opis in Vrednost z DDV */}
                <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-gray-900 leading-tight pr-4">
                        <span className="font-semibold text-xs text-gray-500 mr-2">{item['Zap.']}</span>
                        {item['Storitev/opis']}
                    </span>
                    <span className="text-base font-bold whitespace-nowrap">
                        {formatCurrency(item['Vrednost z DDV'])}
                    </span>
                </div>
                
                {/* Podrobnosti: Količina in Vrednost brez DDV */}
                <div className="flex justify-between text-xs text-gray-600 pt-1 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                        <span>Količina: 
                            <span className="font-semibold ml-1">{item['Količina'].toLocaleString('sl-SI')} {item['EM']}</span>
                        </span>
                        {/* Prikaz DDV% samo za ne-standardne (npr. 9.5% ali 0%) */}
                        {item['DDV%'] !== 0.22 && 
                            <span className={`font-medium ${item['DDV%'] === 0 ? 'text-red-500' : 'text-indigo-500'}`}>
                                ({(item['DDV%'] * 100).toFixed(1)}% DDV)
                            </span>
                        }
                    </div>
                    <span className="font-light text-gray-500">
                        Brez DDV: {formatCurrency(item['Vredn. brez DDV'])}
                    </span>
                </div>
            </div>
          ))}

          {/* Skupaj vrstica */}
          {totalRow && (
            <div className="mt-4 p-3 rounded-lg border-2  border-gray-00  flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800 uppercase">
                    SKUPAJ ({totalRow['Storitev/opis']})
                </span>
                <span className="text-lg font-extrabold text-yellow-800">
                    {formatCurrency(totalRow['Vrednost z DDV'])}
                </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    // Zmanjšan padding (p-2), primeren za sidebar
    <div className="w-full p-2  font-sans min-h-screen">
      
      {/* Glavni povzetek računa - ohranjen kot kompakten blok */}
      <div className="p-4 rounded-xl bg-white  mb-4 border-b-2 border-[var(--primary)] w-full">
        <h1 className="text-xl font-extrabold text-center  mb-2">Povzetek Računa</h1>
        <div className="flex justify-between items-center mb-4 border-b pb-2 text-xs">
          <p className="text-gray-600">ID: <span className="font-mono text-gray-800 bg-gray-100 px-1 rounded-sm">{invoiceDetails.id}</span></p>
          <p className="text-gray-600">Obdobje: <span className="font-semibold capitalize text-gray-800">{invoiceDetails.mesec} {invoiceDetails.leto}</span></p>
        </div>
        
        {/* Skupna vrednost */}
        <div className="p-3  rounded-lg shadow-inner flex justify-between items-center">
            <span className="text-base font-medium text-gray-700">Skupna Vrednost:</span>
            <span className="text-2xl font-extrabold text-[var(--primary)]">{formatCurrency(invoiceDetails.SKUPAJ['Vrednost z DDV'])}</span>
        </div>
      </div>

      {/* Podrobne tabele - sedaj prikazane kot seznami */}
      <div className="grid grid-cols-1 gap-4">
          {renderTable(electricity, 'Elektrika')}
          {renderTable(heating, 'Ogrevanje')}
          {renderTable(water, 'Voda in Komunalne Storitve')}
      </div>
    </div>
  );
};
 
