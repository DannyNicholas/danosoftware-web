import { Location, useLocation, useNavigate } from 'react-router-dom'
import { Container, Dropdown, DropdownItem, DropdownMenu, Icon, Menu, MenuItem } from 'semantic-ui-react'
import { MenuOptions } from '../config/Menu'
import { Media } from './Media'

const AppHeader = () => {

  const location: Location = useLocation()
  const navigate = useNavigate()

  const menuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  return (
    <>
      {/* If we are displaying on a device with a resolution greater than a mobile, show the big menu buttons */}
      <Media greaterThan='mobile'>
        <Menu
          borderless
          icon='labeled'
          fixed='top'
          compact
          style={menuStyle}
        >
          <Container text>
            {
              MenuOptions.map((item, index) =>
                <MenuItem
                  key={index}
                  name={item.id}
                  active={location.pathname === item.route}
                  onClick={() => navigate(item.route)}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </MenuItem>
              )
            }
          </Container>
        </Menu>
        {/*
          The header's menu bar will normally overlay the selected page's content, which hides the top of the page.
          To avoid this we create a fixed height container in our header to push the page content down.
          */}
        <Container text style={{ height: '80px' }} />
      </Media>

      {/* If we are displaying on mobile device resolution, show the smaller dropdown menu */}
      <Media at='mobile'>
        <Container text>
          <Dropdown text='Menu' icon='bars' fluid button className='icon' floating labeled style={menuStyle}>
            <DropdownMenu>
              {
                MenuOptions.map((item, index) =>
                  <DropdownItem
                    key={index}
                    text={item.id}
                    icon={item.icon}
                    onClick={() => navigate(item.route)}
                  />
                )}
            </DropdownMenu>
          </Dropdown>
        </Container>
        {/*
          The mobile menu bar will normally overlay the selected page's content, which hides the top of the page.
          To avoid this we create a small fixed height container in our header to push the page content down.
          */}
        <Container text style={{ height: '10px' }} />
      </Media>
    </>
  )
}

export default AppHeader
