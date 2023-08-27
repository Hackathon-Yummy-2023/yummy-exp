import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ image, description, peopleCount, id }) => {
  return (
    <Link href={`/itinerary?id=${id}`} className="block">
      <article className="relative rounded-lg shadow-md border border-gray-300 mb-4">
        <div className="relative">
          <Image
            src={image}
            alt="Card"
            layout="responsive"
            width={340}
            height={200}
            className="rounded-t-lg"
          />
          <div className="absolute inset-0 bg-opacity-40 text-white backdrop-blur-sm p-4 flex flex-col justify-end">
            <h2 className="text-lg font-semibold mb-1">{description}</h2>
            <p className="text-sm">{peopleCount}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
