import React, {
    useState,
    useEffect
} from 'react';
import axios from "axios";
import CharacterTile from "./CharacterTile";
import styled from "styled-components";

const ACLayout = styled.div `
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`

function CharacterPage() {
    const [characters, setCharacters] = useState([]);
    // debugger;
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(res => {
                console.log("Hello", res.data);
                    setCharacters(res.data.results);
                // axios.get("https://swapi.co/api/planets/1/")
                //     .then(response => {
                        
                //     })
            })
            .catch(error => {
                console.log(
                    "the data was not returned", error
                );
            });
         
    }, []);
    return (
        <ACLayout className="aboutCharacter">
            {characters.map(c => {
                return (
                    <CharacterTile
                    key={c.url}
                    name={c.name}
                    haircolor={c.hair_color}
                    height={c.height}
                    birthyear={c.birth_year}
                    />
                )
            })}
        </ACLayout>
    )
};
export default CharacterPage;