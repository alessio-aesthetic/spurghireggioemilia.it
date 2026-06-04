import { HomeExperience } from "@/components/home-experience";
import { LocalBusinessJsonLd } from "@/components/seo-json-ld";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HomeExperience />
    </>
  );
}
