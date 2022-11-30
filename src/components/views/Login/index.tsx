import {
  getAuth,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "pt-br";

export function Login() {
  const router = useRouter();

  async function handleLogin() {
    await signInWithRedirect(auth, provider);
  }

  async function handleRedirect() {
    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result?.user;
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <div className=" flex h-screen flex-col items-center justify-between bg-red-900 p-8">
      <div />
      <h1 className="text-center font-display text-3xl leading-10 text-amber-400">
        Bolão Copa do Mundo
        <br />
        Qatar 2022
      </h1>

      <button
        className="w-full rounded bg-yellow-300 p-3 font-semibold text-stone-800 transition active:opacity-80"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
