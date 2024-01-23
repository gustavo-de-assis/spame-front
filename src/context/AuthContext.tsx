"use client";
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

import { SignInRequest, recoverUserInfo } from "@/services/auth";

type User = {
  name: string;
  cpf: string;
};

type SignInData = {
  cpf: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signInUser: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "sp.token": token } = parseCookies();

    if (token) {
      recoverUserInfo().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signInUser({ cpf, password }: SignInData) {
    const { token, user } = await SignInRequest({
      cpf,
      password,
    });

    setCookie(undefined, "sp.token", token, {
      maxAge: 60 * 3, // 3 minutes
      sameSite: "none",
    });

    setUser(user);
    router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signInUser }}>
      {children}
    </AuthContext.Provider>
  );
}
