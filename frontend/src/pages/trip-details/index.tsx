import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guestes } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateDetails } from "./header";
import { Plus } from "lucide-react";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)


    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }


    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }


    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <DestinationAndDateDetails />

            <main className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full px-4 sm:px-6">

                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-zinc-50">Atividades</h2>

                        <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-700">
                            <Plus className="w-5 h-5 text-lime-950" />
                            Cadastrar atividade
                        </button>

                    </div>

                    <Activities />

                </div>

                <div className="w-full lg:w-80 space-y-6">

                    <ImportantLinks />

                    <div className="w-full h-px bg-zinc-800" />

                    <Guestes />

                </div>
            </main >

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )
            }


        </div >
    )
}

//items baseline: permite que o texto fique alinhado atraves da parte da altura de baixo do texto
//block: pula a linha e ocupa a largura de toda