"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"

export type Payment = {
  id: string
  Duração: number
  Juros: number
  investimentoMinimo: number
  Banco: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Duração",
    header: "Duração",
  },
  {
    accessorKey: "Juros",
    header: "Juros",
  },
  {
    accessorKey: "Banco",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Banco
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "investimentoMinimo",
    header: () => <div className="text-right">Investimento minimo</div>,
    cell: ({ row }) => {
      const interestRate = parseFloat(row.getValue("investimentoMinimo"))
      const formatted = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(interestRate)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
