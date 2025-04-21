import "@/styles/alignments.css";
import "@/styles/typography.css";
import Text from "@/components/cases/typography/Text";
import Card from "@/components/cases/Card";

const ApiContext = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col gap-12 sm:gap-20 px-6 sm:px-16 sm:pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug sm:leading-normal">
          What is an Application Programming Interface (API)?
        </h2>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 2xl:gap-20 sm:items-center">
          <div className="flex flex-col sm:w-5/12 gap-4 h-full">
            <div className="border-l pl-2 sm:pl-4">
              <Text
                text={`An API is like a restaurant menu, providing a set of actions developers can use in their apps without needing to understand the details.
                  \nJust as you enjoy a dish without knowing how it’s made, developers use these actions, like a "Save As" dialog, to improve their apps.`}
              />
            </div>
            <p className="text-footer">
              Adapted clarification from{" "}
              <a
                href="https://www.howtogeek.com/343877/what-is-an-api/"
                rel="noreferrer"
                target="_blank"
                className="font-medium hover:text-content-tertiary"
              >
                HowToGeek
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:w-7/12 gap-4 text-center">
            <Card
              image={{
                url: "/images/cases/abinbev/api-context.png",
                alt: "Visual representation of Stoplight documentation for APIs, focusing on user data. The image illustrates a user-friendly interface with clear documentation, symbolizing efficient management and communication of API-related information.",
                width: 970,
                height: 1024,
                subtitle:
                  "A sample API for accessing user data showcased in an app named Stoplight.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiContext;
