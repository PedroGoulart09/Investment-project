"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
import Support from "./support"
import { investmentComponents } from "@/app/utils/constants"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function NavBar() {
  const {push} = useRouter();
  return (
    <div className="flex justify-center max-md:h-36 h-16 bg-white">
      
      <NavigationMenu>
        <NavigationMenuList className="max-sm:flex max-sm:flex-col">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text font-bold">Primeiros passos</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gray-100">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative"
                      href="https://www.infomoney.com.br/guias/como-comecar-a-investir/"
                      target="_blank"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Fundamentos Essenciais
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Desvende os conceitos básicos e dê os primeiros passos sólidos no mundo dos investimentos.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="https://www.gov.br/investidor/pt-br/educacional/programa-bem-estar-financeiro/programa-bem-estar-financeiro-arquivos/apostila-06.pdf" title="Introdução a Investimentos">
                  Explore este documento para ter uma introdução ao mundo dos investimentos.
                </ListItem>

                <ListItem href="https://www.youtube.com/watch?v=WXtJxRozku0" title="Como Analisar o Mercado">
                  Assista a este vídeo para aprender a realizar análises de mercado de forma eficaz.
                </ListItem>

                <ListItem href="https://www.youtube.com/watch?v=_JiQ9Q5FQEc" title="Riscos de Investimentos">
                  Avalie os possíveis riscos associados a investimentos neste vídeo informativo.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text font-bold">Conheça alguns tipos de investimentos</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gray-100">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {investmentComponents.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    target="_blank"
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Button variant={"link"} onClick={() => push('/learning')}>Explore o mundo dos investimentos</Button>
          <Support />
        </NavigationMenuList>

      </NavigationMenu>


    </div>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
