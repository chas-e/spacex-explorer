import React from 'react';

import styled from 'styled-components';

import { login, logout } from '../services/firebase';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    background-color: var(--primary-brand-color);
    box-shadow: 1px 1px 10px 1px var(--light-shadow);

    h1 {
        font-family: var(--logo-font);
        color: var(--secondary-brand-color);
    }

    img {
        height: 50px;
        border-radius: 50%;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        padding: 5px;
    }

    span {
        display: flex;
        justify-content: space-evenly;
        font-weight: 700;
        cursor: pointer;
        color: var(--secondary-brand-color);


    }
`;

export default function Header(props) {
    return (
        <StyledHeader>
            <h1>SpaceX Explorer</h1>
            <nav>
                {
                    props.authenticated
                        ? <div>
                            <span onClick={logout}>Logout</span>
                            <img src={props.avatar} alt={"default profile pic"} />
                        </div>
                        : <span onClick={login}>Login</span>
                }
            </nav>
        </StyledHeader>
    );

}