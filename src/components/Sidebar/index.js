import React from 'react'
import { SidebarContainer,Icon,SidebarWrapper,SidebarLink,SideBtnwrap,SidebarRoute,SidebarMenu} from './SidebarElement';
import {GrClose} from 'react-icons/gr'

const Sidebar = ({isopen,toggle}) => {
    return (
        <SidebarContainer isopen={isopen} onClick = {toggle}>
        <Icon >
        <GrClose/>
        
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink onClick = {toggle} to="/about">
        About
        </SidebarLink>
        <SidebarLink onClick = {toggle} to="/discover">
        Discover
        </SidebarLink>
        <SidebarLink onClick = {toggle} to="/services">
        Services
        </SidebarLink>
        <SidebarLink onClick = {toggle} to="/signup">
        Sign Up
        </SidebarLink>
        
        </SidebarMenu>
        <SideBtnwrap>
        
        <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnwrap>
        </SidebarWrapper>
            
        </SidebarContainer>
    )
};


    export default Sidebar
