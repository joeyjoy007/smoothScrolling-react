import styled from 'styled-components'

import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.div `

position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;

top:0;




`
// opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
// top : ${({isOpen})=>(isOpen ? '0' : '-100%')};
export const GrClose = styled.div `
color:"white";
`

export const Icon = styled.div `
position:absolute;
right:1.5rem;
top:1.2rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
backgorund:white;
`