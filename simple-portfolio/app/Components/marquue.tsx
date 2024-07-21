'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const Marquee: React.FC = () => {
  return (
    <div className="marquee glassmorphic p-4 m-6">
      <div className="marquee-background"></div>
      <div className="marquee-content">
        <div className="marquee-group">
          <Image
            src="https://techstack-generator.vercel.app/python-icon.svg"
            alt="Python"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faHtml5} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/js-icon.svg"
            alt="JavaScript"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/mysql-icon.svg"
            alt="MySQL"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/react-icon.svg"
            alt="React"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/webpack-icon.svg"
            alt="Webpack"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/ts-icon.svg"
            alt="TypeScript"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faNpm} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/aws-icon.svg"
            alt="AWS"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/django-icon.svg"
            alt="Django"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            alt="Git"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/java-icon.svg"
            alt="Java"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/docker-icon.svg"
            alt="Docker"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/github-icon.svg"
            alt="GitHub"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faTerminal} size="2x" className="inline-block mx-4 -mb-4" />
        </div>
        <div className="marquee-group">
          <Image
            src="https://techstack-generator.vercel.app/python-icon.svg"
            alt="Python"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faHtml5} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/js-icon.svg"
            alt="JavaScript"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/mysql-icon.svg"
            alt="MySQL"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/react-icon.svg"
            alt="React"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/webpack-icon.svg"
            alt="Webpack"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/ts-icon.svg"
            alt="TypeScript"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faNpm} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/aws-icon.svg"
            alt="AWS"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="inline-block mx-4 -mb-4" />
          <Image
            src="https://techstack-generator.vercel.app/django-icon.svg"
            alt="Django"
            width={65}
            height={65}
            className="inline-block mx-4"
          />
          <Image
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            alt="Git"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/java-icon.svg"
            alt="Java"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/docker-icon.svg"
            alt="Docker"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <Image
            src="https://techstack-generator.vercel.app/github-icon.svg"
            alt="GitHub"
            width={48}
            height={48}
            className="inline-block mx-4"
          />
          <FontAwesomeIcon icon={faTerminal} size="2x" className="inline-block mx-4 -mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
