import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  date: Date;
}

const BookingItem = ({
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
}: BookingItemProps) => {
  return (
    <div>
      <Card className="flex w-full min-w-full flex-row items-center justify-between p-0">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Badge>Confirmado</Badge>

          <div className="flex flex-col gap-2">
            <p className="font-bold">{serviceName}</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={barbershopImageUrl} />
              </Avatar>
              <p className="text-muted-foreground text-sm">{barbershopName}</p>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center border-l p-4 py-3">
          <p className="text-xs capitalize">
            {date.toLocaleDateString("pt-BR", { month: "long" })}
          </p>
          <p>{date.toLocaleDateString("pt-BR", { day: "2-digit" })}</p>
          <p className="text-xs capitalize">
            {date.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BookingItem;
