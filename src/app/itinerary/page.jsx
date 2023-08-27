"use client";

// import { packageItinerary } from "../../mocks/package"
import Image from "next/image";
import { IteneraryItem } from "../components/IteneraryItem";
import Link from "next/link";
import { packageItinerary } from "../mocks/package";
import { useSearchParams } from "next/navigation";
export default function ItineraryPage() {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const itinerary = packageItinerary(parseInt(id, 10));

  console.log(typeof id);
  console.log(itinerary);

  return (
    <main className="bg-[#bb92d4] h-auto px-6 py-6 flex flex-col justify-start items-center gap-y-10">
      <div className="flex flex-col justify-center items-start gap-y-5">
        <h1 className="text-5xl font-bold text-white self-start">Itinerario</h1>
        <h2 className="text-3xl font-semibold text-white self-start">
          <span className="font-bold text-[#5e0e8b]">
            Paquete Yummy Experience:
          </span>{" "}
          {itinerary.placeReserve}
        </h2>
        <p className="text-3xl font-semibold text-white self-start">
          <span className="font-bold text-[#5e0e8b]">Precio:</span> {itinerary.price}
        </p>
      </div>
      <ol className="flex flex-col justify-center items-center gap-y-7">
        <IteneraryItem
          title={"Yummy Rider"}
          description={itinerary?.rydeTo?.from}
          price={itinerary?.rydeTo?.price}
          iconImage={"/images/motorcycle.svg"}
          startTime={itinerary?.rydeTo?.startTime}
          endTime={itinerary?.rydeTo?.endTime}
          index={1}
        />
        <IteneraryItem
          title={itinerary?.placeReserve}
          description={itinerary?.description}
          price={itinerary?.price}
          iconImage={"/images/ticket-icon.svg"}
          startTime={itinerary?.timeInit}
          endTime={itinerary?.timeEndEstimated}
          index={2}
        />
        <IteneraryItem
          title={"Yummy Rider"}
          description={itinerary?.rydeFrom.from}
          price={itinerary?.rydeFrom.price}
          iconImage={"/images/motorcycle.svg"}
          startTime={itinerary?.rydeFrom.startTime}
          endTime={itinerary?.rydeFrom.endTime}
          index={3}
        />
      </ol>

      <Link href="/payment" className="w-full">
        <button className="text-white text-2xl bg-[#5e0e8b] w-full rounded-full font-semibold py-1 justify-self-end">
          Pagar
        </button>
      </Link>
    </main>
  );
}