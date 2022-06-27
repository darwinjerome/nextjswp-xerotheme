const Menu = ({menuItems: {menuItems}}) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <ul className="flex items-center justify-end flex-grow w-full">
        {menuItems.edges.map((item) => (
          <li key={item.node.path}>
            <a
              className="p-4 ml-2 text-grey hover:text-sky-400"
              href={item.node.connectedNode.node.slug}
            >
              {item.node.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;