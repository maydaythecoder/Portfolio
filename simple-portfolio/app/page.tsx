import Link from "next/link";
import Header from "./Components/header";
import Images from "./Components/images";
import Footer from "./Components/Footer";

//TODO: add padding to images that will be animated
//TODO: move Image-Track-Two down half way
//TODO: add button at center of image on hover to link to project
//TODO: add animation to links and words on reload
//TODO: add scroll effect with bezier curve


export default function Home() {
  return (
    <>
      <div className="relativeh-[500vh]">
        <div className="bg-white p-10 mb-96  h-[440vh]">
          <Header />
          <Images />
        </div>
        <Footer />
      </div>
    </>
  );
}
