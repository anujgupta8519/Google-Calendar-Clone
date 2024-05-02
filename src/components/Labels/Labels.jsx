import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>{
              updateLabel({ label: lbl, checked: !checked })}
            }

            style={{ color: new String(lbl).replace("bg-","").replace("-300","") }}
            className={`form-checkbox h-5 w-5  rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{new String(lbl).replace("bg-","").replace("-300","").toUpperCase()}</span>
        </label>
      ))}
    </React.Fragment>
  );
}