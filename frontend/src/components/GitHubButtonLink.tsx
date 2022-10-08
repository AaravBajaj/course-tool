import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useAppSelector} from "../app/hooks";

const GitHubButtonLink = () => {
  const darkMode = useAppSelector((state) => state.ui.darkMode);
  const icon_source = darkMode ? "/GitHub-Mark-Light-32px.png" : "/GitHub-Mark-32px.png";
    return (
      <div
        className="bg-gray-50 cursor-pointer rounded-full p-2"
      >
        <Link href="https://github.com/ScottyLabs/course-tool">
          <Image
              src={icon_source}
              className="rounded"
              width={30}
              height={30}
              alt="github repository"
          />
        </Link>      

      </div>
    );
};

export default GitHubButtonLink;
