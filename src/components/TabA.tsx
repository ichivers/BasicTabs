import { useContext, useEffect, useState } from "react";
import { TeamsFxContext } from "./Context";
import { ErrorWithCode } from "@microsoft/teamsfx";
import { app, pages } from "@microsoft/teams-js";

export default function TabA() {
  const { themeString, teamsUserCredential } = useContext(TeamsFxContext);

  const handleClick = ()=> {
    console.log('pages.currentApp.isSupported', pages.currentApp.isSupported())
    if(pages.currentApp.isSupported()){
      pages.currentApp.navigateTo({pageId: 'index2', subPageId: 'x'})
    } else {
      pages.navigateToApp({appId: 'e378ec4d-dd8b-41cb-a1c5-e3fe3b6aff37', pageId: 'index2', subPageId: 'y'})
    }
  }

  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <h1>Tab A</h1>
      
      <button onClick={handleClick}>Goto Tab B</button>
    </div>
  );
}