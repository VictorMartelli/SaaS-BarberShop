import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
  // barbershop info is no longer displayed in the card per Figma
  // if needed elsewhere it can be fetched separately
}

export function ServiceItem({ service }: ServiceItemProps) {
  const priceInReais = (service.priceInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Card className="border-border bg-card flex-row items-center gap-3 p-3">
      <div className="relative size-[110px] shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
        <div className="flex flex-col gap-1">
          <p className="text-card-foreground text-sm font-bold">
            {service.name}
          </p>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-card-foreground text-sm font-bold">
            {priceInReais}
          </p>
          <Button size="sm" className="rounded-full">
            Reservar
          </Button>
        </div>
      </div>
    </Card>
  );
}
