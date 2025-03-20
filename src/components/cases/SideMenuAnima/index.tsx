const SideMenuAnima = () => {
  const linkStyle = "text-sm font-bold text-content-tertiary hover:text-content-primary";
    
  return (
    <div className="flex flex-col gap-4 fixed">
      <a href="" className={linkStyle}>Overview</a>
      <a href="" className={linkStyle}>Challenge</a>
      <a href="" className={linkStyle}>Research</a>
      <a href="" className={linkStyle}>Prototypes</a>
      <a href="" className={linkStyle}>Solution</a>
      <a href="" className={linkStyle}>Results</a>
      <a href="" className={linkStyle}>Design system</a>
      <a href="" className={linkStyle}>Documentation</a>
    </div>
  );
}

export default SideMenuAnima;