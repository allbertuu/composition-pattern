import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NotificationContentProps {
    text: string;
    date?: Date | number;
}

export function NotificationContent({ text, date }: NotificationContentProps) {
    const formattedDate = date
        ? formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
        : "Sem data.";

    return (
        <div className="flex flex-1 flex-col gap-[2px]">
            <p className="text-sm text-zinc-400">{text}</p>

            <small className="text-zinc-500">{formattedDate}</small>
        </div>
    );
}
