import React from "react";
import { Card } from "../components/Card";

import { packageExperiences } from "../mocks/package";


const ChooseExperience = () => {
  return (
    <>
    <main className="p-4 bg-[#bb92d4]">
      <h1 className="font-sans text-lg font-bold text-center">Experiences</h1>
      {packageExperiences.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          description={item.description}
          image={item.image}
        />
      ))}
    </main>
    </>
  );
};

export default ChooseExperience;
