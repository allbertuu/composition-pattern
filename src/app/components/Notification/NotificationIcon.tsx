import { Icon } from "@phosphor-icons/react";

interface NotificationIconProps {
    icon: React.ElementType & Icon;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
    return <Icon className="h-6 w-6 self-center text-red-600" weight="fill" />;
}
