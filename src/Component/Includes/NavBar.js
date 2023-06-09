import React from "react";
import styled from "styled-components";


export default function NavBar() {
    return (
        <NavBarDiv>
            <h1>navbar</h1>

        </NavBarDiv>
    )
}

const NavBarDiv = styled.div`
    width: 200px;
    position: fixed;
`;
