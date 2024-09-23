import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       <p>Movie Rating: {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating maxRating={3} />
    <StarRating maxRating={10} color="red" size={25} />
    <StarRating
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
