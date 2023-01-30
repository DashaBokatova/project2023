import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {id:61,name:"Campaign Manager Morty",status:"Dead",species:"Human",image:"https://rickandmortyapi.com/api/character/avatar/61.jpeg"},
        {id:197,name:"Kyle",status:"Dead",species:"Humanoid",image:"https://rickandmortyapi.com/api/character/avatar/197.jpeg"},
        {id:308,name:"Scropon",status:"unknown",species:"Alien",image:"https://rickandmortyapi.com/api/character/avatar/308.jpeg"},
        {id:320,name:"Shnoopy Bloopers",status:"unknown",species:"Alien",image:"https://rickandmortyapi.com/api/character/avatar/320.jpeg"},
        {id:330,name:"Solicitor Rick",status:"unknown",species:"Human",image:"https://rickandmortyapi.com/api/character/avatar/330.jpeg"},
        {id:571,name:"Slippy",status:"Alive",species:"Animal",image:"https://rickandmortyapi.com/api/character/avatar/571.jpeg"}
    ]
    return (
        <div>
            {
                characters.map(character=><Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters};