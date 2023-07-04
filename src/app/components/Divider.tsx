interface DividerProps {
    children: React.ReactNode;
}

export function Divider({ children }: DividerProps) {
    return <div className="divide-y-2 divide-zinc-950">{children}</div>;
}
