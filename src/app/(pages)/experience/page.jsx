import React from "react";
import { Card } from "../../components/card";

import { packageExperiences } from "../../mocks/package";

const ChooseExperience = () => {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Tarjetas</h1>
      {packageExperiences.map((item) => (
        <Card
          key={item.id}
          description={item.description}
          image={item.image}
          peopleCount={item.peopleCount}
        />
      ))}
    </div>
  );
};

export default ChooseExperience;
