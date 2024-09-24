import {RAndMChar} from "../types/RickAndMortyChar.ts";

type RAndMCardProps = {
    char:RAndMChar
}
export default function RAndMCard(props:Readonly<RAndMCardProps>){

    return(
        <>
            <img src={props.char.image}/>
            <h3>{props.char.name}</h3>
            <p>{props.char.species}</p>
            <p>{props.char.status}</p>
        </>
    )
}