"use client";

import {
    CheckFat,
    CalendarPlus,
    ClockCountdown,
    FileCode,
    ClockClockwise,
    Eye,
    Info,
    Sparkle,
} from "@phosphor-icons/react";
import { Notification } from "./components/Notification";
import { Divider } from "./components/Divider";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-5">
            <h2 className="flex items-center gap-1 text-lg text-zinc-500">
                <Info size="1.2rem" />
                Este projeto serviu para praticar o
            </h2>
            <h1 className="mb-8 text-center text-3xl font-semibold text-white">
                <a
                    href="https://felixgerschau.com/react-component-composition/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-600"
                >
                    Composition Pattern
                </a>{" "}
                no ReactJS
            </h1>

            <div className="w-full max-w-[480px] overflow-hidden rounded-md border border-zinc-800 shadow-lg shadow-black">
                <header className="bg-zinc-800 px-5 py-3 font-bold text-white">
                    Notificações
                </header>

                <div>
                    <div className="bg-zinc-950 px-5 py-2 font-medium text-zinc-400">
                        Hoje
                    </div>

                    <Divider>
                        <Notification.Root>
                            <Notification.Icon icon={CheckFat} />
                            <Notification.Content
                                text='Parabéns! A tarefa "Comentar post do Alberto no LinkedIn" foi concluída com sucesso.'
                                date={new Date()}
                            />
                        </Notification.Root>

                        <Notification.Root>
                            <Notification.Icon icon={CheckFat} />
                            <Notification.Content
                                text='Parabéns! A tarefa "Desenvolver navbar do e-commerce" foi concluída com sucesso.'
                                date={new Date().setSeconds(1)}
                            />
                        </Notification.Root>

                        <Notification.Root>
                            <Notification.Icon icon={FileCode} />
                            <Notification.Content
                                text='Você recebeu uma nova tarefa: "Corrigir bug em prod (Dev Sr: Deus te ajude)."'
                                date={new Date().setMinutes(1)}
                            />
                            <Notification.Actions>
                                <Notification.Action
                                    icon={Eye}
                                    className="bg-[#364E78] hover:bg-[#46649c]"
                                />
                            </Notification.Actions>
                        </Notification.Root>
                    </Divider>
                </div>

                <div className="bg-zinc-950 px-5 py-2 font-medium text-zinc-400">
                    Ontem
                </div>

                <Notification.Root>
                    <Notification.Icon icon={ClockCountdown} />
                    <Notification.Content
                        text='Atenção! A tarefa "Enviar proposta de orçamento" está atrasada. Por favor, atualize o status.'
                        date={new Date().setHours(1)}
                    />
                    <Notification.Actions>
                        <Notification.Action icon={CalendarPlus} />
                        <Notification.Action
                            icon={ClockClockwise}
                            className="bg-red-700 hover:bg-red-600"
                        />
                    </Notification.Actions>
                </Notification.Root>
            </div>

            <a
                href="http://www.albertodeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-1 text-base font-medium text-zinc-400 hover:underline"
            >
                <Sparkle className="text-red-500" weight="fill" size="1.2rem" />{" "}
                Me mostre algo interessante
            </a>
        </main>
    );
}
