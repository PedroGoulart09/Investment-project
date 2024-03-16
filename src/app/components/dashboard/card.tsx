import * as React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import Link from "next/link"

export function CardProfileInvestment({ result, setResult }: any) {
  const kindOfProfile = result <= 8 ? 'Conservador' : result <= 16 ? 'Moderado' : 'Arrojado';
  const description = result <= 8 ? 'prefere segurança e estabilidade em seus investimentos.' : result <= 16 ? 'gosta de equilibrar riscos e retornos.' : 'não tem medo de correr riscos para obter maiores retornos.';

  return (
    <Card className="w-full md:w-[350px] mt-20">
      <CardHeader>
        <CardTitle>Análise de perfil</CardTitle>
        <CardDescription>Aqui está o resultado do seu perfil de investidor</CardDescription>
      </CardHeader>
      <CardContent>

        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col gap-1 space-y-1.5">
            <p>Parabéns, seu perfil é <strong> {kindOfProfile} </strong> !</p>
            <p>Isso significa que você é uma pessoa que {description}</p>
            <p>Obrigado por completar a análise. Agora vamos redirecioná-lo para a página com os possíveis investimentos de acordo com seu perfil.</p>
            <p>Clique em <strong> continuar </strong> para ver os possiveis investimentos de acordo com seu perfil.</p>
          </div>
        </div>

      </CardContent>
      <CardFooter className="flex flex-col gap-4 md:flex-row justify-between">
        <Button onClick={() => setResult(0)} className="font-main-font border-none rounded bg-red-500 hover:bg-red-500 hover:text-white text-white mb-2 md:mb-0" variant="outline">Refazer analise</Button>
        <Link
          href={{
            pathname: '/investment',
            query: { profile: kindOfProfile }
          }}
        >
          <Button className="font-main-font h-9 px-7 py-2 border-none rounded bg-green-500 hover:bg-green-500 text-white">Continuar</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}