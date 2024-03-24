'use client'
import { useSearchParams } from "next/navigation"
import { Payment, columns } from "../../components/dashboard/columuns"
import { DataTable } from "../../components/dashboard/data-table"
import { useInfoInvestment } from "@/app/hooks/useInfoInvestment";
import Graphic from "@/app/components/dashboard/graphic";
import Footer from "@/app/components/dashboard/footer";

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

function getData(infoInvestment: any): Payment[] {
  return infoInvestment.map(({
    companyid,
    companyname,
    liquidezcorrente,
    liquidezmediadiaria,
    margembruta,
    margemliquida,
    ticker, subsectorname,
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
  const { infoInvestment } = useInfoInvestment();
  const data = getData(infoInvestment);
  return (
    <>
      <div className="container mx-auto py-10">
      <p className="w-full text-center text-2xl mb-5">Perfil do Investidor:  <strong>{url.get('profile')}</strong></p>
        <DataTable columns={columns} data={data} />
      </div>
      <div className="py-10">
      <Graphic />
      </div>
      <Footer />
      
    </>
  )
}

