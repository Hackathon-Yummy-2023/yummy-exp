import React from "react";
import Image from "next/image";

export const Card = ({ image, description, peopleCount }) => {
  return (
    <article className="relative rounded-lg shadow-md border border-gray-300">
      <div className="relative">
        <Image
          src={image}
          alt="Card"
          layout="responsive"
          width={340}
          height={200}
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-lg text-white p-4 flex flex-col justify-end">
          <h2 className="text-lg font-semibold mb-1">{description}</h2>
          <p className="text-sm">{peopleCount}</p>
        </div>
      </div>
    </article>
  );
};
