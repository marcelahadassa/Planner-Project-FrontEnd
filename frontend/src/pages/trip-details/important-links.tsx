import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return (

        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva de AirBnb</span>
                        <a href="#" className="hover:text-zinc-200 truncate block text-xs text-zinc-400">
                            https://www.airbnb.com.br/rooms/1047000114565757686
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 w-5 h-5" />
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva de AirBnb</span>
                        <a href="#" className="hover:text-zinc-200 truncate block text-xs text-zinc-400">
                            https://www.airbnb.com.br/rooms/1047000114565757686
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 w-5 h-5" />
                </div>

            </div>

            <Button variant="secondary" >
                <Plus className="text-zinc-200 w-5 h-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}
