interface NotificationActionsProps {
    children: React.ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
    return <div className="flex gap-2 self-center">{children}</div>;
}
