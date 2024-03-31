import Hero from "../components/hero";
import IconStack from "../components/iconStack";
import CardGalery from "../components/cardGalery";
import CardProject from "../components/cardProject";
import Filter from "../components/filter";
import FormEmail from "../components/formEmail";


export default function Home() {
  return (
    <main>
      <Hero />
      <IconStack />
      <FormEmail />
    </main>
  );
}
