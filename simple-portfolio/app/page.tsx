import Link from "next/link";
import Header from "./Components/header";
import Images from "./Components/images";
import Footer from "./Components/Footer";

//TODO: move Image-Track-Two down half way
//TODO: add button at center of image on hover to link to project
//TODO: add animation to links and words on reload
//TODO: add scroll effect with bezier curve
//TODO: add functionality to links

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-white p-10 mb-96">
          <Header />
          <Images />
        </div>
        <Footer />
      </div>
    </>
  );
}
