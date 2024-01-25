"use client";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";

export default function Register() {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      employee: {
        name: "",
        birthdate: "",
        gender: "",
        mother: "",
        father: "",
        cpf: "",
        rg: "",
        crm: "",
        speciality: "",
        phone: "",
        email: "",
      },
      address: {
        street: "",
        number: "",
        county: "",
        city: "",
        state: "",
      },
    },
  });

  const { isSubmitting } = formState;

  async function handleRegistration(data: any) {
    console.log(data);
    reset();
  }

  return (
    <main>
      <Navbar />
      <section className="mt-32 px-8">
        <h1 className="text-primary text-4xl">Cadastramento de Funcionários</h1>
        <section className="mt-3">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <section className="w-full">
              <h1 className="text-primary text-3xl">Informações Pessoais</h1>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Nome Completo</label>
                  <input
                    {...register("employee.name")}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-26">
                  <label className="text-lg">Data Nasc.:</label>
                  <input
                    {...register("employee.birthdate")}
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
                <div className="flex flex-col w-16">
                  <label className="text-lg">Sexo</label>
                  <input
                    {...register("employee.gender")}
                    id="gender"
                    name="gender"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Filiação (Mãe)</label>
                  <input
                    {...register("employee.mother")}
                    id="mother"
                    name="mother"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Filiação (Pai)</label>
                  <input
                    {...register("employee.father")}
                    id="father"
                    name="father"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-row gap-8 w-2/5">
                  <div className="flex flex-col w-26">
                    <label className="text-lg">CPF</label>
                    <input
                      {...register("employee.cpf")}
                      id="cpf"
                      name="cpf"
                      type="text"
                      autoComplete="off"
                      autoFocus
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-26">
                    <label className="text-lg">RG</label>
                    <input
                      {...register("employee.rg")}
                      id="rg"
                      name="rg"
                      type="text"
                      autoComplete="off"
                      autoFocus
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-8 w-1/2">
                  <div className="flex flex-col w-26">
                    <label className="text-lg">CRM</label>
                    <input
                      {...register("employee.crm")}
                      id="crm"
                      name="crm"
                      type="text"
                      autoComplete="off"
                      autoFocus
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-26">
                    <label className="text-lg">Especialidade</label>
                    <input
                      {...register("employee.speciality")}
                      id="speciality"
                      name="speciality"
                      type="text"
                      autoComplete="off"
                      autoFocus
                      className="h-11 rounded px-3 outline-none bg-slate-200"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full">
              <h1 className="text-primary text-3xl">Endereço</h1>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-2/5">
                  <label className="text-lg">Rua</label>
                  <input
                    {...register("address.street")}
                    id="street"
                    name="street"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-26">
                  <label className="text-lg">Número</label>
                  <input
                    {...register("address.number")}
                    id="number"
                    name="number"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-1/4">
                  <label className="text-lg">Bairro</label>
                  <input
                    {...register("address.county")}
                    id="county"
                    name="county"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/5">
                  <label className="text-lg">Cidade</label>
                  <input
                    {...register("address.city")}
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-16">
                  <label className="text-lg">UF</label>
                  <input
                    {...register("address.state")}
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
            </section>
            <section className="w-full">
              <h1 className="text-primary text-3xl">Contato</h1>
              <div className="flex flex-row w-full gap-8 my-2">
                <div className="flex flex-col w-1/5">
                  <label className="text-lg">Telefone</label>
                  <input
                    {...register("employee.phone")}
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200 w-full"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/5">
                  <label className="text-lg">E-mail</label>
                  <input
                    {...register("employee.email")}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className="h-11 rounded px-3 outline-none bg-slate-200"
                    required
                  />
                </div>
              </div>
            </section>
            <button
              className={`h-14 w-52 rounded-md mt-8 ${
                isSubmitting ? "bg-primary" : "bg-secondary"
              }   text-white font-semibold text-3xl hover:bg-primary`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
