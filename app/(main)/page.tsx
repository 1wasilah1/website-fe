import Banner from "../../components/Banner";
import CV from "../../components/CV";
import Fitur from "../../components/Fitur";
import Announcement from "../../components/Announcement";
import ArtikelTerkait from "../../components/ArtikelTerkait";
import Experience from "../../components/Experience";
import Analysis from "../../components/Analysis";

export const metadata = {
  title: "Dinas Perumahan Rakyat dan Permukiman",
  description: "Dinas Perumahan Rakyat dan Kawasan Permukiman",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <CV />
      <Fitur />
      <ArtikelTerkait />
      <Experience />
      <Announcement />
      <Analysis />
    </main>
  );
}
