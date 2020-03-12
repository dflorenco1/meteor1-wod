import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>MISSION</Menu.Item>
            <Dropdown item text="PRODUCTS & SERVICES">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="ABOUT US">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>CONTACT</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

export default TopMenu;
