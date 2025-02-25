import { Logo } from "../Logo";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Logo width={60} height={60}/>
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold">Lucca Romaniello</h1>
          <h2 className="text-lg font-medium text-content-secondary">Frontend Engineer and former Product Designer.</h2>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-content-secondary">Currently working at AB InBev. <br /> Based in Brazil, open to full-time and freelance opportunities.</p>
      </div>
    </div>
  )
};

export default Header;