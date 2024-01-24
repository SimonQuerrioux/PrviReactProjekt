import { PreberiVec } from "./PreberiVec";

import "./style/zival.css";

export function Zival(props) {
  const { name, desc, url, image } = props.data;
  return (
    <>
      <div className="Zival">
        <img src={image} />
        <h2>{name}</h2>
        <p>{desc}</p>
        <PreberiVec></PreberiVec>
      </div>
    </>
  );
}
