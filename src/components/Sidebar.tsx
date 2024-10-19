function Sidebar() {
  return (
    <aside className="w-[17vw] bg-gray-800 p-6 sticky top-0 h-screen">
      <div className="text-xl font-bold mb-6">WATCH</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Favourites
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Coming Soon
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Social
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
