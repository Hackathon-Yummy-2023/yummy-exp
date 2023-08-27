// import { packageItinerary } from "../../mocks/package"
import Image from "next/image"

export default function ItineraryPage() {
    return (
        <main className="bg-[#229171] h-full p-4 flex flex-col justify-start items-center gap-y-6">
            <h1 className="text-5xl font-bold text-white self-start">Itinerario</h1>
            <Image width={186} height={186} src="/images/qr-code.svg" alt="Código QR" title="Código QR" className="bg-white" />
                <ol>

                </ol>

            <button className="text-white text-2xl bg-[#5e0e8b] w-full rounded-full font-semibold py-1 justify-self-end">
                Pagar
            </button>
        </main>
    )
}