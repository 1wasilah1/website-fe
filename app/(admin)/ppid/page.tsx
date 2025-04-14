import type { Metadata } from "next";
import Banner from "../../../components/Banner";
import PpidContent from "../../../components/PpidContent";

export const metadata = {
  title: "Dinas Perumahan Rakyat dan Permukiman",
  description: "Dinas Perumahan Rakyat dan Kawasan Permukiman",
};

export default function Ppid() {
  return (
    <main>
      <Banner />
      <PpidContent />
    </main>
  );
}
