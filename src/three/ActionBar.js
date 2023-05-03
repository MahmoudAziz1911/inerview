import React from "react";

const ActionBar = (props) => {
    return (
      <div className="space-x-4 align-middle text-center">
        <button className="bg-purple-500 px-2 py-3" onClick={props.onPreviousClick}>
          Previous
        </button>
        <button className="bg-purple-500 px-2 py-3" onClick={props.onNextClick}>
          Next
        </button>
      </div>
    );
  };
  
export default ActionBar;
  