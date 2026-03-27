"use client";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
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
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const handleCancelBooking = async () => {
    if (!id || isCancelling) return;

    try {
      setIsCancelling(true);
      await cancelBooking(id);
      toast.success("Reserva cancelada com sucesso!");
      setIsCancelDialogOpen(false);
      setIsSheetOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao cancelar a reserva.");
    } finally {
      setIsCancelling(false);
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
            <div className="bg-background relative flex w-full flex-row items-center gap-3 rounded-lg p-3">
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
                ? "bg-primary/10 text-primary w-fit uppercase"
                : "bg-muted text-muted-foreground w-fit uppercase"
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
            <div className="text-muted-foreground flex items-center justify-between text-sm">
              <p>Data</p>
              <p>{format(date, "dd 'de' MMMM", { locale: ptBR })}</p>
            </div>
            <div className="text-muted-foreground flex items-center justify-between text-sm">
              <p>Horário</p>
              <p>{format(date, "HH:mm")}</p>
            </div>
            <div className="text-muted-foreground flex items-center justify-between text-sm">
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
            <AlertDialog
              open={isCancelDialogOpen}
              onOpenChange={setIsCancelDialogOpen}
            >
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="flex-1 rounded-full">
                  Cancelar Reserva
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancelar reserva?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Essa ação não pode ser desfeita. Confirme para cancelar
                    sua reserva.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isCancelling}>
                    Voltar
                  </AlertDialogCancel>
                  <AlertDialogAction
                    variant="destructive"
                    disabled={isCancelling}
                    onClick={handleCancelBooking}
                  >
                    {isCancelling ? "Cancelando..." : "Confirmar cancelamento"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BookingItem;
