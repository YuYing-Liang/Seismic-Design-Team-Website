import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAbout: false,
      aboutDropdownOpen: false,
      isOpen: false
    };

    this.aboutToggle = this.aboutToggle.bind(this);
    this.aboutToggleDropdown = this.aboutToggleDropdown.bind(this);
    this.onMouseEnterAbout = this.onMouseEnterAbout.bind(this);
    this.onMouseLeaveAbout = this.onMouseLeaveAbout.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  aboutToggle() {
    this.setState({
      isOpenAbout: !this.state.isOpenAbout
    });
  }

  aboutToggleDropdown() {
    this.setState(prevState => ({
      aboutDropdownOpen: !prevState.aboutDropdownOpen
    }));
  }

  onMouseEnterAbout() {
    this.setState({aboutDropdownOpen: true});
  }

  onMouseLeaveAbout() {
    this.setState({aboutDropdownOpen: false});
  }

  render() {
    return <Navbar className="navbar" light expand="md">
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {/* <img src={require('./logo.png')} alt="logo"/> */}
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <Dropdown className="d-inline-block" toggle={this.aboutToggleDropdown} isOpen={this.state.aboutDropdownOpen}>
              <DropdownToggle caret>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/about"> Team </DropdownItem>
                <DropdownItem tag={Link} to="/about/history"> Past Years Competitions </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/media">Media</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/design">Design Process</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/sponsors">Sponsors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink><AnchorLink href="#contact" style={{textDecoration:'none'}}>Contact</AnchorLink></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}