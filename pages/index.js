import Intro from "@/public/src/components/introduction/intro";
import MAIN from "@/public/src/components/firstpage/firstpage";
import CONTACTS from "@/public/src/components/contact/cont";
import EXPERIENCE from "@/public/src/components/experience/expi";
import PROJECTS from "@/public/src/components/projects/proj";

export default function Home() {
  return (
    <main>
      <MAIN />
      <Intro />
      <EXPERIENCE />
      <PROJECTS />
      <CONTACTS />

    </main>
  );
}
