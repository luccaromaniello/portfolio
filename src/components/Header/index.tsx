const Header = () => {
  return (
    <div className="flex flex-col gap-6 py-12 text-left sm:text-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl leading-tight sm:leading-snug font-medium">I&apos;m Lucca Romaniello, a Frontend Engineer with product design background.</h1>
        </div>
      </div>
      <p className="text-md sm:text-2xl text-content-secondary">Based in Brazil, currently working at AB InBev. Open to full-time and freelance opportunities.</p>
    </div>
  )
};

export default Header;