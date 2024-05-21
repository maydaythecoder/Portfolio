import Link from "next/link";
import Header from "./Components/header";
import Images from "./Components/Projects";
import Footer from "./Components/Footer";

//TODO: make home page responsive
//TODO: make about page responsive
//TODO: add button at center of image on hover to link to project
//TODO: add animation to links and words on reload

export default function Home() {
  return (
      <div className="relative ">
        <div className="bg-white p-10 mb-80 align-bottom h-full">
          <Header />
          <Images />
        </div>
        <Footer />
      </div>
  );
}
