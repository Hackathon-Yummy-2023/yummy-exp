import React from "react";
import { Card } from "../components/Card"

import { packageExperiences } from "../mocks/package";

const ChooseExperience = () => {
  return (
    <main className="p-4 bg-[#bb92d4]">
      <h1 className="text-2xl font-bold mb-4">Mis Tarjetas</h1>
      {packageExperiences.map((item) => (
        <Card
          key={item.id}
          description={item.description}
          image={item.image}
          peopleCount={item.peopleCount}
        />
      ))}
    </main>
  );
};

export default ChooseExperience;
