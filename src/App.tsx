import React, { FormEvent } from "react";

import "./App.css";
import { useMultistepForm } from "./useMultistepForm";

function App() {
  const { steps, currentStepIndex, step, next, back} = useMultistepForm([
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>,
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="relative bg-white border border-black p-8 m-4 rounded-[.5rem]">
      <form onSubmit={onSubmit}>
        <div className="absolute top-4 right-4">
          {currentStepIndex}/{steps.length}
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end">
          {currentStepIndex != 0 && (
            <button onClick={() => back()}>back</button>
          )}
          {currentStepIndex != steps.length && (
            <button onClick={() => next()}>next</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
