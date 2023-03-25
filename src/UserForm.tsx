import React from "react";
import FromWrapper from "./FromWrapper";

interface userData {
  firstName: string;
  lastName: string;
  age: string;

}
type UserFormProps = userData & {
    updateData: (fields: Partial<userData>) => void
  }

const UserForm = ({ firstName, lastName, age, updateData }: UserFormProps) => {
  return (
    <FromWrapper title={"User"}>
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={firstName}
        onChange={(e) => updateData({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={lastName}
        onChange={(e) => updateData({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        className="border border-gray-500 rounded-md"
        value={age}
        onChange={(e) => updateData({ age: e.target.value })}
      />
    </FromWrapper>
  );
};

export default UserForm;
