import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        onStateChange={(state) => this.handleStateChange(state)}
        isOpen={this.state.menuOpen}
        className="burger-menu"
        disableAutoFocus
      >
        <div className="burger-menu-links">
          <Link onClick={() => this.closeMenu()} to="/">
            Home
          </Link>
          <Link onClick={() => this.closeMenu()} to="/about">
            About
          </Link>
          <Link onClick={() => this.closeMenu()} to="/guitars">
            Guitars
          </Link>
          <Link onClick={() => this.closeMenu()} to="/bass">
            Bass
          </Link>
          <Link onClick={() => this.closeMenu()} to="/drums">
            Drums
          </Link>
          <Link onClick={() => this.closeMenu()} to="/amps">
            Amps
          </Link>
        </div>
      </Menu>
    );
  }
}

export default BurgerMenu;
