import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Chrome extends React.Component {
	render() {
		return (
			<div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Fairfield</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/#/view1">View 1</NavItem>
                        <NavItem eventKey={2} href="/#/view2">View 2</NavItem>
                    </Nav>
                </Navbar>

                <div> 
                    { this.props.children }
                </div>
            </div>
		);
  	}
};