import { v4 as uuid } from "uuid";

type SignInRequestData = {
  cpf: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function SignInRequest(data: SignInRequestData) {
  await delay();
  const pass: string = "12345";

  if (data.password != pass) {
    return;
  }

  return {
    token: uuid(),
    user: {
      name: "Fulano de Tal",
      cpf: "1234567899",
    },
  };
}

export async function recoverUserInfo() {
  await delay();

  return {
    user: {
      name: "Fulano de Tal",
      cpf: "1234567899",
    },
  };
}
