'use client'
import { LampDemo } from "@/app/components/ui/lamp";
import { Tabs } from "@/app/components/ui/tabs";
import InfoProfile from "../../components/dashboard/infoProfile";
import { Button } from "@/app/components/ui/button";
import { useRouter } from 'next/navigation';
import { useAuthenticateToken } from "@/app/hooks/useAuthenticateToken";

export default function page() {
  const { push } = useRouter();
  /* useAuthenticateToken(); */
  const tabs = [
    {
      title: "Conservador",
      value: "Conservador",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: '#212121' }}>
          <p>Conservador</p>
          <InfoProfile hopeReturn="Retorno esperado em 95% dos anos, um retorno esperado X. (CDI - 2%/ CDI + 6%)." kindOfProfile={'Conservador'} description={'Investidor que aceita um potencial de retorno menor em função  do seu objetivo principal, que é conservar seu patrimônio. Por conta disso, geralmente não apresenta tolerância às oscilações do mercado em seus ativos.'} />
        </div>
      ),
    },
    {
      title: "Moderado",
      value: "Moderado",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: '#212121' }}>
          <p>Moderado</p>
          <InfoProfile hopeReturn="Retorno esperado em 95% dos anos, um retorno esperado X. (CDI - 3,5%/ CDI + 10,5%)." kindOfProfile={'Moderado'} description={'Investidor que geralmente opta por produtos mais líquidos, reconhecendo a necessidade de diversificar melhor seu patrimônio, caminhando um pouco mais para o lado da exposição à renda variável. No entanto, ainda é um perfil que apresenta baixa tolerância à volatilidade.'} />
        </div>
      ),
    },
    {
      title: "Arrojado",
      value: "Arrojado",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: '#212121' }}>
          <p>Arrojado</p>
          <InfoProfile hopeReturn="Retorno esperado em 95% dos anos, um retorno esperado X. (CDI - 5%/ CDI + 17%)." kindOfProfile={'Arrojado'} description={'Investidor que busca um grande potencial de retorno, tem alta tolerância à volatilidade das cotações dos ativos que compõem seu portfólio, pois conhece bem os ativos que estão ali dentro e sabe que a oscilação dos preços permite que ele compre bons ativos a preços descontados. Ainda assim, é um investidor que abre mão deste potencial de retorno em uma parcela razoável do seu patrimônio para preservá-lo.'} />
        </div>
      ),
    },
  ];

  return (
    <section>
      <LampDemo />
      <div className="h-[50rem] md:h-[50rem] [perspective:1000px] flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-40">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center">
          <Tabs tabs={tabs} />
          <Button className="flex justify-center items-center rounded-2xl border-2 bg-black h-14 text-white mt-4 sm:mt-0" type="button" variant={'outline'} onClick={() => push('/profileInvestment')}>Fazer análise do meu perfil de investidor</Button>
        </div>
      </div>
    </section>

  );
}
