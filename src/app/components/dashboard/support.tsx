"use client"

import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

const SHEET_SIDES = ["Suporte"] as const

type Support = (typeof SHEET_SIDES)[number]

export default function Support() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant={"link"}>{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Suporte</SheetTitle>
              <SheetDescription>
                Entre em contato conosco para obter ajuda.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
                <Textarea placeholder="Escreva sua mensagem aqui."/>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="bg-black text-white border rounded hover:bg-black">Enviar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
