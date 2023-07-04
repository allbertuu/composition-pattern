interface NotificationRootProps {
    children: React.ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
    return (
        <div className="relative flex items-start gap-6 bg-zinc-900 px-4 py-4 sm:px-8">
            {children}
        </div>
    );
}
