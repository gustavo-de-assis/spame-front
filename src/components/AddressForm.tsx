"use client";

import { Address } from "@/models/Address";
import { Dispatch, ReactNode, SetStateAction } from "react";

type AddressProps = {
  cep: string;
  address: Address;
  setCep: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<Address>>;
};

export default function AddressForm(props: AddressProps): ReactNode {
  const { cep, address, setCep, setAddress } = props;

  return (
    <main className="w-full">
      <h1 className="text-primary text-3xl">Endereço</h1>
      <div className="flex flex-col w-1/4">
        <label className="text-lg">Pesquisa Cep</label>
        <input
          id="cep"
          name="cep"
          type="text"
          autoComplete="off"
          value={cep}
          onChange={(e) => {
            setCep(e.target.value);
          }}
          className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
        />
      </div>
      <div className="flex flex-row w-full gap-8 my-2">
        <div className="flex flex-col w-2/5">
          <label className="text-lg">Rua</label>
          <input
            id="street"
            name="street"
            type="text"
            autoComplete="off"
            value={address.street}
            onChange={(e) => {
              setAddress({
                ...address,
                street: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
            required
          />
        </div>
        <div className="flex flex-col w-26">
          <label className="text-lg">Número</label>
          <input
            id="number"
            name="number"
            type="text"
            autoComplete="off"
            value={address.number}
            onChange={(e) => {
              setAddress({
                ...address,
                number: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200"
            required
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-8 my-2">
        <div className="flex flex-col w-1/4">
          <label className="text-lg">Bairro</label>
          <input
            id="district"
            name="district"
            type="text"
            autoComplete="off"
            value={address.district}
            onChange={(e) => {
              setAddress({
                ...address,
                district: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
            required
          />
        </div>
        <div className="flex flex-col w-1/5">
          <label className="text-lg">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="off"
            value={address.city}
            onChange={(e) => {
              setAddress({
                ...address,
                city: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
            required
          />
        </div>
        <div className="flex flex-col w-16">
          <label className="text-lg">UF</label>
          <input
            id="state"
            name="state"
            type="text"
            autoComplete="off"
            value={address.state}
            onChange={(e) => {
              setAddress({
                ...address,
                state: e.target.value.toUpperCase(),
              });
            }}
            className="h-11 rounded px-3 outline-none bg-slate-200"
            required
          />
        </div>
      </div>
    </main>
  );
}
