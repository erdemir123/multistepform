import React from "react";
import FromWrapper from "./FromWrapper";
type AddressData = {
    street: string
    city: string
    state: string
    zip: string
  }
  
  type AddressFormProps = AddressData & {
    updateData: (fields: Partial<AddressData>) => void
  }

const AdressForm = ({
    street,
    city,
    state,
    zip,
    updateData,
  }: AddressFormProps) => {
  return (
    <FromWrapper title={"Address"}>
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={street}
        onChange={(e) => updateData({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={city}
        onChange={(e) => updateData({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={state}
        onChange={(e) => updateData({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        className="border border-gray-500 rounded-md"
        value={zip}
        onChange={(e) => updateData({ zip: e.target.value })}
      />
    </FromWrapper>
  );
};

export default AdressForm;
