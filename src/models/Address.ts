import { Dispatch, SetStateAction } from "react";

export type Address = {
  id: number;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
};

export type AddressProps = {
  cep: string;
  address: Address;
  setCep: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<Address>>;
};
