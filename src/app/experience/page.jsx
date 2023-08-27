import React from "react";
import { Card } from "../components/card";
import { packageExperiences } from "../mocks/package";
import { ModalPayment } from "../components/ModalPayment"
const ChooseExperience = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
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
      <button onClick={openModal}>Open Modal</button>
      <ModalPayment isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </ModalPayment>
    </div>
  );
};

export default ChooseExperience;
