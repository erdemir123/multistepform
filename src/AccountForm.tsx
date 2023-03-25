import React from "react";
import FromWrapper from "./FromWrapper";
type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
    updateData: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateData }: AccountFormProps) => {
  return (
    <FromWrapper title={"Account"}>
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        className="border border-gray-500 rounded-md"
        value={email}
        onChange={(e) => updateData({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        className="border border-gray-500 rounded-md"
        value={password}
        onChange={(e) => updateData({ password: e.target.value })}
      />
    </FromWrapper>
  );
};

export default AccountForm;
