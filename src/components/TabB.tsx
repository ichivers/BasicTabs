import { useContext, useEffect, useState } from "react";
import { TeamsFxContext } from "./Context";
import { app } from "@microsoft/teams-js";
import { ErrorWithCode } from "@microsoft/teamsfx";

export default function TabB() {
  const { themeString, teamsUserCredential } = useContext(TeamsFxContext);
  const [token, setToken] = useState<string>();

  useEffect(() => {
    if(app.isInitialized()){
      app.getContext().then((context) => {
        console.log('index2 app is initialized context ', context)
      })
    } else {
      app.initialize().then(() => {
        app.getContext().then((context) => {
          console.log('index2 app NOT initialized context ', context)
        })
      })
    }
  }, [])

  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <h1>Tab B</h1>
      {token}
    </div>
  );
}