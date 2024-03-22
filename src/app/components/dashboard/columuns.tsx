"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Checkbox } from "@/app/components/ui/checkbox"

export type Payment = {
  companyid: number
  Empresa: string
  'Liquidez Recorrente': number
  'Liquidez Média Diária': number
  'Margem Bruta': number
  'Margem Líquida': number
  'Ativo': string
  'Área de Investimento': string
  'Valor de Mercado': number
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
    accessorKey: "Empresa",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Empresa
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'Liquidez Recorrente',
    header: () => <div>Liquidez Recorrente</div>,
    cell: ({ row }) => {
      let interestRate = parseFloat(row.getValue('Liquidez Recorrente'))
      if (isNaN(interestRate)) {
        interestRate = 0;
      }
      const formatted = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(interestRate)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'Margem Bruta',
    header: () => <div>Margem Bruta</div>,
    cell: ({ row }) => {
      let interestRate = parseFloat(row.getValue('Margem Bruta'))
      if (isNaN(interestRate)) {
        interestRate = 0;
      }
      const formatted = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(interestRate)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'Margem Líquida',
    header: () => <div>Margem Liquida</div>,
    cell: ({ row }) => {
      let interestRate = parseFloat(row.getValue('Margem Líquida'))
      if (isNaN(interestRate)) {
        interestRate = 0;
      }
      const formatted = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(interestRate)
  
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'Valor de Mercado',
    header: () => <div>Valor de Mercado</div>,
    cell: ({ row }) => {
      const interestRate = parseFloat(row.getValue('Valor de Mercado'))
      const formatted = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(interestRate)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: 'Liquidez Média Diária',
    header: 'Liquidez Média Diária'
  },
  {
    accessorKey: 'Ativo',
    header: 'Ativo'
  },
  {
    accessorKey: 'Área de Investimento',
    header: 'Área de Investimento'
  },

]
