import { Header } from "@/components/widgets/molecules/Header";
import { MatchesList } from "../../molecules/MatchesList";

export function Guesses() {
  return (
    <div className="overflow-scroll">
      <Header title="Palpites" />

      <section className="mt-10 overflow-y-scroll">
        <MatchesList />
      </section>
    </div>
  );
}
