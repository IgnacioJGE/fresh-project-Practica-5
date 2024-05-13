import { type PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Photprops from "../components/films.tsx"
import axios from "npm:axios"
import keyfeaturestype from "../components/films.tsx"
import Photo from "../components/films.tsx"
import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";


export type Photprops = {
    _id: string;
    brand: string;
    name: string;
    iso: number;
    formatThirtyFive: boolean;
    formatOneTwenty: boolean;
    color: boolean;
    staticImageUrl: string;
    description: string;
    customDescription: string[];
    keyFeatures: keyfeaturestype[];
  };
  
  export type keyfeaturestype = {
    _id: string;
    feature: string;
  };
  

  export default async function App() {

    let photos:Photprops[]= [];
    const fetchdata = async () => {
        const response = await axios.get("https://filmapi.vercel.app/api/films");
        const data:Photprops[] = response.data;
        photos=data;
        console.log(photos.at(1)); // Muestra los datos obtenidos
      }
     await fetchdata(); // Llama a fetchdata cuando el componente se monta

    return (
        <div>
         <button onClick={(e) =>  fetchdata()}>Boton de fotos</button>

        <label for="marca">Choose a brand: </label>
        <select name="marca" id="marca" placeholder={"marca"}>
        <option value="fujifilm">fujifilm</option>
        <option value="lomography">lomography</option>
        <option value="psychedelic blues">psychedelic blues</option>
        <option value="revolog">revolog</option>
      </select>
        <div className="personajes-container">
        <h1>Todas las Imagenes</h1>
        <div className="personajes-grid">
            {photos.map((char)=>(<Photo 
            name={char.name}
            brand={char.brand} 
            description={char.description}
            iso={char.iso}
            staticImageUrl={char.staticImageUrl}
            formatOneTwenty={char.formatOneTwenty}
            formatThirtyFive={char.formatThirtyFive}
            customDescription={char.customDescription}
            color={char.color}
            />))}
        </div>
        </div>
        </div>
    );
  }
