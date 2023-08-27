// import { packageItinerary } from "../../mocks/package"
import Image from "next/image"
import { IteneraryItem } from "../components/IteneraryItem"
import Link from "next/link"

export default function ItineraryPage() {
    return (
        <main className="bg-[#bb92d4] h-auto px-6 py-6 flex flex-col justify-start items-center gap-y-10">
            <div className="flex flex-col justify-center items-start gap-y-5">
                <h1 className="text-5xl font-bold text-white self-start">Itinerario</h1>
                <h2 className="text-3xl font-semibold text-white self-start"><span className="font-bold text-[#5e0e8b]">Paquete Yummy Experience:</span> Caracas Fly</h2>
                <p className="text-3xl font-semibold text-white self-start"><span className="font-bold text-[#5e0e8b]">Precio:</span> $200,00</p>
            </div>
            <ol className="flex flex-col justify-center items-center gap-y-7">
                {/* <IteneraryItem 
                    title={"Yummy Rider"}
                    description={"De: El Paraiso, Caracas - A: Caracas Fly, Caracas"}
                    price={"$20,00"}
                    iconImage={"/images/motorcycle.svg"}
                    startTime={"27 / 08/ 23 11:30am"}
                    endTime={"27 / 08/ 23 11:50pm"}
                    index={1}
                /> */}
                <IteneraryItem 
                    title={"Caracas Fly"}
                    description={"El único túnel de viento de venezuela recreativo y profesional para toda la familia."}
                    price={"$160,00"}
                    iconImage={"/images/ticket-icon.svg"}
                    startTime={"27 / 08/ 23 12:00pm"}
                    endTime={"27 / 08/ 23 08:00pm"}
                    index={2}
                />
                {/* <IteneraryItem 
                    title={"Yummy Rider"}
                    description={"De: Caracas Fly, Caracas - A: El Paraiso, Caracas"}
                    price={"$20,00"}
                    iconImage={"/images/motorcycle.svg"}
                    startTime={"27 / 08/ 23 08:10pm"}
                    endTime={"27 / 08/ 23 09:10pm"}
                    index={3}
                /> */}
            </ol>

            <Link href="/payment" className="w-full">            
                <button disabled={true} className="text-white text-2xl bg-[#5e0e8b] w-full rounded-full font-semibold py-1 justify-self-end">
                    Pagar
                </button>
            </Link>
        </main>
    )
}