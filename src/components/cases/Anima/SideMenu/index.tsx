import "./styles.css";

const SideMenu = () => {
  return (
    <div className="hidden sm:flex flex-col gap-4 fixed px-4 z-10">
      <a href="" className={"side-link"}>
        Overview
      </a>
      <a href="" className={"side-link"}>
        Challenge
      </a>
      <a href="" className={"side-link"}>
        Research
      </a>
      <a href="" className={"side-link"}>
        Prototypes
      </a>
      <a href="" className={"side-link"}>
        Solution
      </a>
      <a href="" className={"side-link"}>
        Results
      </a>
      <a href="" className={"side-link"}>
        Design system
      </a>
      <a href="" className={"side-link"}>
        Documentation
      </a>
    </div>
  );
};

export default SideMenu;
