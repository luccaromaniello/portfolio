import UserFlowItem from "../UserFlowItem";

const UserFlow = () => {
  return (
    <div className="flex flex-col gap-16">
      <UserFlowItem
        heading="Graduation"
        personas={[{ name: "Lucas", role: "Student", action: "He graduates." }]}
      />
      <UserFlowItem
        heading="Certificate Emission"
        description="Validation of Lucas's and the institution's documents to assure authenticity."
        personas={[
          {
            name: "Cleiton",
            role: "Employee of the Issuer Institution",
            action:
              "Verifies Lucas's documents, issues the diploma, and sends it to Adalberto.",
          },
          {
            name: "Adalberto",
            role: "Dean",
            action: "Digitally signs and sends the diploma to Juliana.",
          },
        ]}
      />
      <UserFlowItem
        heading="Certificate Registration"
        description="This process might be under the responsability of other institutions, which actually makes this platform complex.*"
        personas={[
          {
            name: "Juliana",
            role: "Employee of the Registry Institution",
            action:
              "Verifies and returns the validated documents to Adalberto.",
          },
          {
            name: "Adalberto",
            role: "Dean",
            action: "Re-signs and sends it back to Cleiton.",
          },
        ]}
      />
      <UserFlowItem
        heading="Delivery"
        personas={[
          {
            name: "Lucas",
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
