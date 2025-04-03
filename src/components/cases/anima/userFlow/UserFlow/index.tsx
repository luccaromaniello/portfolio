import UserFlowItem from "../UserFlowItem";

const UserFlow = () => {
  return (
    <div className="flex flex-col gap-16">
      <UserFlowItem
        heading="Graduation"
        personas={[
          {
            name: "Lucas",
            image: {
              url: "/images/cases/anima/persona-lucas.png",
              alt: "Illustration of Lucas, a newly graduated student, with a proud smile.",
            },
            role: "Student",
            action: "He graduates.",
          },
        ]}
      />
      <UserFlowItem
        heading="Certificate Emission"
        description="Validation of Lucas's and the institution's documents to assure authenticity."
        personas={[
          {
            name: "Cleiton",
            role: "Employee of the Issuer Institution",
            image: {
              url: "/images/cases/anima/persona-cleiton.png",
              alt: "Illustration of Cleiton, an employee at the issuer institution, with short hair and professional attire.",
            },
            action:
              "Verifies Lucas's documents, issues the diploma, and sends it to Adalberto.",
          },
          {
            name: "Adalberto",
            image: {
              url: "/images/cases/anima/persona-adalberto.png",
              alt: "Illutration of Adalberto, a dean with a trimmed beard, shown in a professional style.",
            },
            role: "Dean",
            action: "Digitally signs and sends the diploma to Juliana.",
          },
        ]}
      />
      <UserFlowItem
        heading="Certificate Registration"
        description="This process may be managed by other institutions, making the platform complex.*"
        personas={[
          {
            name: "Juliana",
            role: "Employee of the Registry Institution",
            image: {
              url: "/images/cases/anima/persona-juliana.png",
              alt: "Illustration of Juliana, a higher education employee with brown hair and glasses.",
            },
            action:
              "Verifies and returns the validated documents to Adalberto.",
          },
          {
            name: "Adalberto",
            role: "Dean",
            image: {
              url: "/images/cases/anima/persona-adalberto.png",
              alt: "Illutration of Adalberto, a dean with a trimmed beard, shown in a professional style.",
            },
            action: "Re-signs and sends it back to Cleiton.",
          },
        ]}
      />
      <UserFlowItem
        heading="Delivery"
        personas={[
          {
            name: "Lucas",
            image: {
              url: "/images/cases/anima/persona-lucas.png",
              alt: "Illustration of Lucas, a newly graduated student, with a proud smile.",
            },
            role: "Student",
            action:
              "Receives the visual representation of the diploma sent by Cleiton.",
          },
        ]}
      />
    </div>
  );
};

export default UserFlow;
