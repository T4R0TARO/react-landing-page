import "../styles/Header.css";
import Navigation from "./Navigation.jsx";
import HeaderContent from "./HeaderContent";
function Header() {
  return (
    <div className="Header">
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </div>
  );
}

export default Header;
