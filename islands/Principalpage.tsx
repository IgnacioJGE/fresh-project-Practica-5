
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Photprops from "../components/films.tsx";
import axios from "npm:axios";
import keyfeaturestype from "../components/films.tsx";
import Photo from "../components/films.tsx";
import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

export type results={
  hola:Photprops[];
}
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
const Home: FunctionalComponent = () => {
  const [photos, setPhotos] = useState<results>();

    const fetchdata = async () => {

        const response = await axios.get('https://filmapi.vercel.app/api/films');
        const data: results = response.data;
        setPhotos(data);
    };
   
console.log("funciono")
    fetchdata();

  return (
    <div>
      <label htmlFor="marca">Choose a brand:</label>
      <select name="marca" id="marca" placeholder="marca">
        <option value="fujifilm">fujifilm</option>
        <option value="lomography">lomography</option>
        <option value="psychedelic blues">psychedelic blues</option>
        <option value="revolog">revolog</option>
      </select>
      <div className="personajes-container">
        <h1>Todas las Imagenes</h1>
        <div className="personajes-grid">
          {photos?.hola.map((char) => (
            <Photo
              key={char._id}
              name={char.name}
              brand={char.brand}
              description={char.description}
              iso={char.iso}
              staticImageUrl={char.staticImageUrl}
              formatOneTwenty={char.formatOneTwenty}
              formatThirtyFive={char.formatThirtyFive}
              customDescription={char.customDescription}
              color={char.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
