'use client'
import { useSearchParams } from "next/navigation"
import { Payment, columns } from "../../components/dashboard/columuns"
import { DataTable } from "../../components/dashboard/data-table"
import { useEffect } from "react";
import { parseJwt } from "@/app/utils/functions";
import { useAuthenticateToken } from "@/app/hooks/useAuthenticateToken";

function getData(): Payment[] {
  const url = useSearchParams();
  if (url.get('profile') === 'Conservador' || url.get('profile') === 'Moderado') {
    return [
      {

        id: '1',
        Banco: "JP Morgan Chase",
        Duração: 365,
        Juros: 2.75,
        investimentoMinimo: 10000
      },
      {
        id: '2',
        Banco: "Bank of America",
        Duração: 180,
        Juros: 2.5,
        investimentoMinimo: 5000
      },
      {
        id: '3',
        Banco: "Wells Fargo",
        Duração: 270,
        Juros: 2.6,
        investimentoMinimo: 8000
      },
      {
        id: '4',
        Banco: "Citigroup",
        Duração: 365,
        Juros: 2.8,
        investimentoMinimo: 12000
      },
      {
        id: '5',
        Banco: "Goldman Sachs",
        Duração: 180,
        Juros: 2.4,
        investimentoMinimo: 6000
      },
      {
        id: '6',
        Banco: "Santander",
        Duração: 360,
        Juros: 6.0,
        investimentoMinimo: 10000
      },
      {
        id: '6',
        Banco: "Bradesco",
        Duração: 270,
        Juros: 5.5,
        investimentoMinimo: 8000
      },
      {
        id: '6',
        Banco: "Itaú",
        Duração: 180,
        Juros: 5.2,
        investimentoMinimo: 6000
      },
      {
        id: '6',
        Banco: "BBVA",
        Duração: 365,
        Juros: 6.2,
        investimentoMinimo: 12000
      },
      {
        id: '6',
        Banco: "Banco do Brasil",
        Duração: 240,
        Juros: 5.8,
        investimentoMinimo: 10000
      },
      {
        id: '6',
        Banco: "HSBC",
        Duração: 360,
        Juros: 5.5,
        investimentoMinimo: 15000
      },
      {
        id: '6',
        Banco: "Barclays",
        Duração: 270,
        Juros: 5.2,
        investimentoMinimo: 12000
      },
      {
        id: '6',
        Banco: "UBS",
        Duração: 180,
        Juros: 5.0,
        investimentoMinimo: 10000
      },
      {
        id: '6',
        Banco: "Deutsche Bank",
        Duração: 365,
        Juros: 5.8,
        investimentoMinimo: 18000
      },
      {
        id: '6',
        Banco: "Credit Suisse",
        Duração: 240,
        Juros: 5.3,
        investimentoMinimo: 11000
      },
      {
        id: '6',
        Banco: "Bradesco",
        Duração: 360,
        Juros: 7.0,
        investimentoMinimo: 20000
      },
      {
        id: '6',
        Banco: "Itaú",
        Duração: 270,
        Juros: 6.5,
        investimentoMinimo: 15000
      },
      {
        id: '6',
        Banco: "Santander",
        Duração: 180,
        Juros: 6.2,
        investimentoMinimo: 12000
      },
      {
        id: '6',
        Banco: "BBVA",
        Duração: 365,
        Juros: 7.5,
        investimentoMinimo: 22000
      },
      {
        id: '6',
        Banco: "Banco do Brasil",
        Duração: 240,
        Juros: 6.8,
        investimentoMinimo: 18000
      },
      {
        id: '6',
        Banco: "JP Morgan Chase",
        Duração: 360,
        Juros: 7.2,
        investimentoMinimo: 20000
      },
      {
        id: '6',
        Banco: "Bank of America",
        Duração: 270,
        Juros: 6.7,
        investimentoMinimo: 15000
      },
      {
        id: '6',
        Banco: "Wells Fargo",
        Duração: 180,
        Juros: 6.5,
        investimentoMinimo: 12000
      },
      {
        id: '6',
        Banco: "Citigroup",
        Duração: 365,
        Juros: 7.6,
        investimentoMinimo: 22000
      },
      {
        id: '6',
        Banco: "Goldman Sachs",
        Duração: 240,
        Juros: 7.0,
        investimentoMinimo: 18000
      }
    ]
  }

  return [
    {
      id: '6',
      Banco: "Teste",
      Duração: 240,
      Juros: 7.0,
      investimentoMinimo: 18000
    },
  ]

}

export default function DemoPage() {
  const data = getData()
  useAuthenticateToken();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}


