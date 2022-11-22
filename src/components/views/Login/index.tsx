import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useRouter } from "next/router";

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "pt-br";

export function Login() {
  const router = useRouter();

  async function handleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      const { displayName, photoURL } = user;
      alert({ displayName });

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

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
