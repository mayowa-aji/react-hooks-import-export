// import React from "react";
// import howManyParks from "./parks/howManyParks";
// // import { trees, wildlife } from "./parks/RockyMountain"
// // import * as RMFunctions from "./parks/RockyMountain"
// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain"

import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

// function ColoradoStateParks() {
//   howManyParks(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;

// }
//   console.log(parkTrees);
//   parkWildlife();

//   // console.log(RMFunctions.trees);
//   // RMFunctions.wildlife();
//   // RMFunctions.elevation();

// export default ColoradoStateParks;
export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
