'use client'
import { useSearchParams } from "next/navigation"
import { Payment, columns } from "../../components/dashboard/columuns"
import { DataTable } from "../../components/dashboard/data-table"
import { useAuthenticateToken } from "@/app/hooks/useAuthenticateToken";
import { useInfoInvestment } from "@/app/hooks/useInfoInvestment";

interface InvestmentInfo {
  companyid: number;
  companyname: string;
  liquidezcorrente: number;
  liquidezmediadiaria: number;
  margembruta: number;
  margemliquida: number;
  ticker: string;
  subsectorname: string;
  valormercado: number;
}

function getData(url: any, infoInvestment: any): Payment[] {
  return infoInvestment.map(({ 
    companyid, 
    companyname, 
    liquidezcorrente, 
    liquidezmediadiaria, 
    margembruta,
    margemliquida, 
    ticker,subsectorname, 
    valormercado }: InvestmentInfo) => {
      return {
          companyid,
          Empresa: companyname,
          'Liquidez Recorrente': liquidezcorrente,
          'Liquidez Média Diária': liquidezmediadiaria,
          'Margem Bruta': margembruta,
          'Margem Líquida': margemliquida,
          'Ativo': ticker,
          'Área de Investimento': subsectorname,
          'Valor de Mercado': valormercado
      };
  });
}


export default function DemoPage() {
  const url = useSearchParams();
  const {infoInvestment} = useInfoInvestment();
  const data = getData(url, infoInvestment);
  console.log(infoInvestment);
  
  /* useAuthenticateToken(); */

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

