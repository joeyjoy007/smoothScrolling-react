import React from 'react'
import { FaBars } from "react-icons/fa"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItemv, NavMenu, NavLinks,NavBtn,NavBtnLink } from './NavbarElements'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to="/dolla">Dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItemv>
              <NavLinks>
                <NavLinks to="about">About</NavLinks>
              </NavLinks>
            </NavItemv>
            <NavItemv>
              <NavLinks>
                <NavLinks to="about">About</NavLinks>
              </NavLinks>
            </NavItemv>
            <NavItemv>
              <NavLinks>
                <NavLinks to="about">About</NavLinks>
              </NavLinks>
            </NavItemv>
            <NavItemv>
              <NavLinks>
                <NavLinks to="about">About</NavLinks>
              </NavLinks>
            </NavItemv>
          </NavMenu>
          <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
