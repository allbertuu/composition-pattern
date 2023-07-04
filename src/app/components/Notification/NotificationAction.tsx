import { classNames } from "@/utils";

interface NotificationActionProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ElementType;
    onClick?: () => void;
}

export function NotificationAction({
    icon: Icon,
    onClick,
    ...rest
}: NotificationActionProps) {
    return (
        <button
            {...rest}
            onClick={onClick}
            className={classNames(
                rest.className || "bg-zinc-800 hover:bg-zinc-700",
                "flex items-center justify-center rounded p-2"
            )}
        >
            <Icon className="h-5 w-5 text-zinc-100" />
        </button>
    );
}
