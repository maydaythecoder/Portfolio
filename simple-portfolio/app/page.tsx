import Link from "next/link";
import Header from "./Components/header";
import Images from "./Components/Projects";
import Footer from "./Components/Footer";

// TODO: make home page responsive
// TODO: make about page responsive
// TODO: add button at center of image on hover to link to project
// TODO: add animation to links and words on reload

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-white p-4 sm:p-6 md:p-10 mb-20 md:mb-40 lg:mb-80 align-bottom h-full">
        <Header />
        <Images />
      </div>
      <Footer />
    </div>
  );
}
