import React from 'react';
import styled from "styled-components";

const CharacterDiv = styled.div `
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: goldenrod;
    border: 10px outset peru;
    margin: 3%;
    padding: 3%;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px 2px black;
    font-weight: bold;
    font-size: 1.4rem;
    
`
const NameStyle = styled.h2 `
    color: saddlebrown;
    text-shadow: 1px 1px 2px white;
    font-size: 2rem;
`


const CharacterCard = props => {
    console.log("this is props", props);

    return (
        <CharacterDiv className="aboutCharacter">
            <NameStyle>Charcter Name: {props.name}</NameStyle>
            <p>Hair Color: {props.haircolor}</p>
            <p>Height: {props.height}</p>
            <p>Birth Year: {props.birthyear}</p>
        </CharacterDiv>
    );
};
export default CharacterCard;



