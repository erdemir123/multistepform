import React, { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AdressForm from "./AdressForm";

import "./App.css";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";
interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, step, next, back } = useMultistepForm([
    <UserForm {...data} updateData={updateData} />,
    <AdressForm {...data} updateData={updateData} />,
    <AccountForm {...data} updateData={updateData} />,
  ]);
  function updateData(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="relative bg-white border border-black p-8 m-4 rounded-[.5rem]">
      <form onSubmit={onSubmit}>
        <div className="absolute top-4 right-4">
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end">
          {currentStepIndex != 0 && (
            <button
              onClick={() => back()}
              className="w-[80px] bg-slate-200 px-3 py-2 rounded-[5px] active:bg-slate-800 active:text-white font-bold "
            >
              back
            </button>
          )}
          {currentStepIndex != steps.length && (
            <button
              onClick={() => next()}
              className="w-[80px] bg-slate-200 px-3 py-2 rounded-[5px] active:bg-slate-800 active:text-white font-bold "
            >
              next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
