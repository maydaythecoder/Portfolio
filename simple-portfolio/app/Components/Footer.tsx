import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black h-[60vh] fixed bottom-0 left-0 w-full -z-50">
      <h5 className="text-[white] text-center pt-32 -mb-10 font-space-grotesk font-normal tracking-[-0.025em] text-8xl leading-[1em] md:text-[100px] text-[color:var(--64ddf9a6011f1)]">
        Let's work together
      </h5>

      <div className=" border-t-[1px] border-gray-400 border-opacity-40 mt-28 mx-10">
        <a
          className="align-baseline mt-14 flex absolute  ml-9 font-space-grotesk font-light tracking-[-0.025em] text-[16px] text-[white] hover:underline text-[color:var(--64ddf9a6011f1)]"
          href="https://github.com/maydaythecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            height="24"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            className="octicon octicon-mark-github v-align-middle color-fg-default"
            fill="#808080"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>

          <p className="mt-[2px] font-space-grotesk font-semibold ml-1">
            Github
          </p>
        </a>
        <a
          className="align-baseline absolute mt-7 ml-[35vw] font-space-grotesk font-light tracking-[-0.025em] text-[20px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
          href="mailto:Muhyadin.Mohamed.003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          muhyadin.mohamed.003@gmail.com
        </a>
        <div className="ml-[750px]">
        <a
          className="align-baseline flex justify-between absolute mt-8 pt-6 ml-[35vw] font-space-grotesk font-light tracking-[-0.025em] text-[16px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
          href="https://www.linkedin.com/in/muhyadin-mohamed-567a72255/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#808080"
            className="mercado-match "
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <p className="mt-[2px] font-space-grotesk font-semibold ml-1">
            Linkedin
          </p>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
