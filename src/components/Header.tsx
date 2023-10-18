import './header.css';

const links = ['about us', 'info', 'support us'];

export const Header = () => {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </nav>
    </header>
  );
};
