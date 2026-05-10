function Header() {
  return (
    <header className="w-full border-b border-(--color-mist) bg-(--color-root)">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        <h1 className="text-2xl font-normal tracking-tight text-(--color-void)">
          Application Tracker
        </h1>
        <span className="text-sm uppercase tracking-wider text-(--color-stone)">
          Job Applications
        </span>
      </div>
    </header>
  );
}

export default Header;