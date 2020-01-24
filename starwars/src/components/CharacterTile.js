import React from 'react';
import styled from "styled-components";

const CharacterDiv = styled.div `
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: sand;
    margin: 3%;
    padding: 3%;

`

const CharacterCard = props => {
    console.log("this is props", props);

    return (
        <CharacterDiv className="aboutCharacter">
            <h2>Charcter Name: {props.name}</h2>
            <p>Hair Color: {props.haircolor}</p>
            <p>Height: {props.height}</p>
            <p>Birth Year: {props.birthyear}</p>
        </CharacterDiv>
    );
};
export default CharacterCard;



