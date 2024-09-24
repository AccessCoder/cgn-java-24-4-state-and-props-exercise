import {RAndMChar} from "../types/RickAndMortyChar.ts";
import RAndMCard from "./RAndMCard.tsx";

type RAndMGalleryProps = {
    chars: RAndMChar[]
}
export default function RAndMGallery(props:Readonly<RAndMGalleryProps>){

    return(
        <>
        {props.chars.map((currywurst) => <RAndMCard char={currywurst}/>)}
        </>
    )
}