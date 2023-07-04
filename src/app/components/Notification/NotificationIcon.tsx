import { Icon } from "@phosphor-icons/react";

interface NotificationIconProps {
    icon: React.ElementType & Icon;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
    return <Icon className="w-6 h-6 text-red-600 self-center" weight="fill" />;
}
