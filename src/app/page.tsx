import React, { ReactNode } from "react";
import ContentCard from "./components/ContentCard";
import projectData from "./project_data.json"
import { Project } from "../../types";

export default function Home() {
  function renderContent() {
      const contentCards:Array<ReactNode> = [];

      projectData.forEach((project:Project, ind) => {
        const { thumbnail, title, shortname, role} = project;
        contentCards.push(
          <div key={"content" + ind} className="hover:cursor-pointer">
              <ContentCard thumbnail={thumbnail} title={title} shortname={shortname} role={role} />
          </div>
        );
      });
      return contentCards;
    }
    return (
      <div className="flex flex-row bg-black text-white justify-center w-[100vw]">
        <div className="max-w-screen-lg">
          <div className="content-header-container">
              <div>
                <h1 className="black">i&apos;m nick</h1>
              </div>
              <div>
                <h1>
                  <span className="black">i make </span>
                  apps
                  <br />
                  websites
                  <br />
                  games
                </h1>
              </div>
          </div>
          <div className="flex flex-col gap-10 pb-10">
            {renderContent()}
          </div>
        </div>
      </div>
    );
}
