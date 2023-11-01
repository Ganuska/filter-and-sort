import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen w-full max-w-full items-center justify-center sm:p-0">
      {children}
    </main>
  );
};

export default AuthLayout;
