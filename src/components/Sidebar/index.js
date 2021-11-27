import React from 'react'
import { SidebarContainer,Icon } from './SidebarElement';
import {GrClose} from 'react-icons/gr'

const Sidebar = () => {
    return (
        <SidebarContainer>
        <Icon >
        <GrClose/>
        
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to="/about">
        About
        </SidebarLink>
        <SidebarLink to="/about">
        About
        </SidebarLink>
        <SidebarLink to="/about">
        About
        </SidebarLink>
        <SidebarLink to="/about">
        About
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
