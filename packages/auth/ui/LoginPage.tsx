import React, { PropsWithChildren, useRef } from "react";
import { signIn } from "next-auth/react";

export const LoginPage = () => {
  const loginRef = useRef<any>();
  const passwordRef = useRef<any>();

  const onSignIn = () => {
    signIn("custom", {
      username: loginRef.current.value,
      password: passwordRef.current.value,
      callbackUrl: "/",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>Login Page</h1>
        <p>
          <input ref={loginRef} defaultValue="test" />
        </p>

        <p>
          <input ref={passwordRef} defaultValue="test" />
        </p>

        <div>
          <button onClick={onSignIn}>Login</button>
        </div>
      </div>
    </div>
  );
};

LoginPage.Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
