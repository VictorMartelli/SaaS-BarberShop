"use client";

import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

export function PhoneItem({ phone }: PhoneItemProps) {
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado!");
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Smartphone className="size-6" />
        <p className="text-foreground text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={handleCopyPhone}
      >
        Copiar
      </Button>
    </div>
  );
}
