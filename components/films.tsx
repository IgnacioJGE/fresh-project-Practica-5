import { FunctionComponent } from "preact";


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
  

const Photo: FunctionComponent<Photprops> = (props) => {
  const { name, brand, iso,formatThirtyFive,formatOneTwenty,color,staticImageUrl } = props;
  return (
    <div className="perfil-container">
      <h2>{name}</h2>
      <img src={staticImageUrl} alt={name}style={{ width: "200px", height: "200px" }} />
      <div>
      <p>Brand: {brand}</p>
      <p>ISO: {iso}</p>
     <p>Color: {color ? "color" : "blanco y negro"}</p> 
      <p>Formato: {formatOneTwenty? "One Twenty":"Thrity Five"}</p>
    {props.keyFeatures && props.keyFeatures.length > 0 && (
    <div>
        <p>Description: {props.description}</p>
        <p>CustomDescription: {props.customDescription}</p>
    <p>KeyFeatures:</p>
    <ul>
      {props.keyFeatures.map((comment) => (
        <li key={comment.feature}>
          <p>Feature: {comment.feature}</p>
        </li>
      ))}
    </ul>
  </div>
)}




      </div>

</div>
  );
};

export default Photo;
