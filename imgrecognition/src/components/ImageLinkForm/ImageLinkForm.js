// import React from "react";
// import styles from "./ImageLinkForm.module.css";
// const ImageLinkForm = () => {
//   return (
//     <div>
//       <p className="f3">
//         {"This Magic Brain will detect faces in your pictures. Give it a try"}
//       </p>
//       <div className={styles.center}>
//         <div className={styles.form}>
//           <input className={styles.input} type="tex"></input>
//           <button className={styles.button}>Detect</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageLinkForm;

import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className=" f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-orange"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
