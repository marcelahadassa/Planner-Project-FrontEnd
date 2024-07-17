import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guestes() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Lucas Aurélio</span>
                        <span className="truncate block text-xs text-zinc-400">
                            lucasaurelio@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 w-5 h-5" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Gabriel Cisneiros</span>
                        <span className="truncate block text-sm text-zinc-400">
                            gabrielcisneiros@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 w-5 h-5" />
                </div>

            </div>

            <Button variant="secondary" size="full" >
                <UserCog className="text-zinc-200 w-5 h-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}

