"use client";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { PhoneItem } from "./phone-item";
import { Button } from "./ui/button";
import { cancelBooking } from "../_actions/cancel-booking";
import { toast } from "sonner";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
  id?: string;
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  date: Date;
  status: "confirmed" | "finished";
  priceInCents?: number;
  address?: string;
  phones?: string[];
}

const BookingItem = ({
  id,
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
  status,
  priceInCents,
  address,
  phones,
}: BookingItemProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCancelBooking = async () => {
    if (!id) return;

    try {
      await cancelBooking(id);
      toast.success("Reserva cancelada com sucesso!");
      setIsSheetOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao cancelar a reserva.");
    }
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Card className="flex h-full w-full min-w-full cursor-pointer flex-row items-center justify-between p-0">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Badge
              className={
                status === "confirmed"
                  ? "bg-primary/10 text-primary uppercase"
                  : "bg-muted text-muted-foreground uppercase"
              }
            >
              {status === "confirmed" ? "Confirmado" : "Finalizado"}
            </Badge>

            <div className="flex flex-col gap-2">
              <p className="font-bold">{serviceName}</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={barbershopImageUrl} />
                </Avatar>
                <p className="text-sm">{barbershopName}</p>
              </div>
            </div>
          </div>

          <div className="flex h-full w-[106px] flex-col items-center justify-center border-l py-3">
            <p className="text-xs capitalize">
              {format(date, "MMMM", { locale: ptBR })}
            </p>
            <p className="text-2xl">{format(date, "dd")}</p>
            <p className="text-xs">{format(date, "HH:mm")}</p>
          </div>
        </Card>
      </SheetTrigger>

      <SheetContent className="w-full max-w-[90%] p-0 sm:max-w-md">
        <SheetHeader className="px-5 py-6">
          <SheetTitle className="text-left">Informacões da Reserva</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 px-5 pb-6">
          <div className="relative flex h-[180px] w-full items-end justify-center rounded-lg p-5">
            <Image
              src="/map.png"
              alt="Localização da barbearia"
              fill
              className="rounded-lg object-cover"
            />
            <div className="relative flex w-full flex-row items-center gap-3 rounded-lg bg-background p-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={barbershopImageUrl} />
              </Avatar>
              <div className="flex flex-col">
                <p className="text-base font-bold">{barbershopName}</p>
                <p className="text-muted-foreground truncate text-xs">
                  {address}
                </p>
              </div>
            </div>
          </div>

          <Badge
            className={
              status === "confirmed"
                ? "w-fit bg-primary/10 text-primary uppercase"
                : "w-fit bg-muted text-muted-foreground uppercase"
            }
          >
            {status === "confirmed" ? "Confirmado" : "Finalizado"}
          </Badge>

          <Card className="flex flex-col gap-3 p-3">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold">{serviceName}</p>
              <p className="text-sm font-bold">
                {priceInCents &&
                  Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(priceInCents / 100)}
              </p>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>Data</p>
              <p>{format(date, "dd 'de' MMMM", { locale: ptBR })}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>Horário</p>
              <p>{format(date, "HH:mm")}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>Barbearia</p>
              <p>{barbershopName}</p>
            </div>
          </Card>

          {phones && phones.length > 0 && (
            <div className="flex flex-col gap-3">
              {phones.map((phone, index) => (
                <PhoneItem key={index} phone={phone} />
              ))}
            </div>
          )}
        </div>

        <SheetFooter className="mt-auto flex-row gap-3 px-5 pb-6">
          <SheetClose asChild>
            <Button variant="outline" className="flex-1 rounded-full">
              Voltar
            </Button>
          </SheetClose>
          {status === "confirmed" && (
            <Button
              variant="destructive"
              className="flex-1 rounded-full"
              onClick={handleCancelBooking}
            >
              Cancelar Reserva
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BookingItem;
