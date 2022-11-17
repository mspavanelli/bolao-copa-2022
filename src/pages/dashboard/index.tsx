import Head from "next/head";
import { Dashboard } from "@/components/views/Dashboard";

export default function App() {
  return (
    <>
      <Head>
        <title>Bolão da Copa</title>
      </Head>
      <Dashboard />
    </>
  );
}
