import UserFlowItem from "@/components/cases/anima/userFlow/UserFlowItem";
import Divider from "@/components/Divider";
import "@/styles/typography.css";
import "../styles.css";

const DividerPlaceholder = () => {
  return (
    <div className="flex flex-row w-full h-6 gap-16 lg:gap-4">
      <div className="hidden sm:flex sm:flex-col user-flow-alignment"></div>
      <div className="flex flex-row w-full gap-8 lg:pr-5 2xl:pr-4">
        <div className="flex flex-row w-[72px] justify-center">
          <Divider type={1} />
        </div>
        <div className="flex flex-col flex-1"></div>
      </div>
    </div>
  );
};

const UserFlow = () => {
  return (
    <div className="flex flex-col">
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
        first
      />
      <DividerPlaceholder />
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
              "Verifies Lucas's documents, issues the diploma, and forwards it to Adalberto.",
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
      <DividerPlaceholder />
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
      <DividerPlaceholder />
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
        last
      />
      <div className="flex flex-col gap-4 pt-8">
        <p className="text-footer">
          *The separation between employees of the Issuer and Registry
          Institution exists because some institutions can only issue
          certificates, not register them. These institutions must send
          certificates to those authorized for registration, which helps manage
          authenticity control.
        </p>
        <p className="text-footer">
          The avatars used belong to{" "}
          <a
            href="https://www.dicebear.com/"
            rel="noreferrer"
            target="_blank"
            className="font-medium hover:text-content-tertiary"
          >
            DiceBear
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default UserFlow;
