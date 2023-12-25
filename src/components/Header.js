const Header = () => (
  <header className='flex justify-between items-center py-4 px-8'>
    <div>
    🤌
    </div>
    <nav>
      <a href="/ranking" className="mr-6">Ranking</a>
      <a href="/add-prompt" className="mr-6">Add Prompt</a>
      <a href="/results" className="mr-6">Results</a>
    </nav>
  </header>
);

export default Header;