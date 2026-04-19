// npm install unicornstudio-react
// or
// yarn add unicornstudio-react
// or
// pnpm add unicornstudio-react

// then import the component
import UnicornScene from "unicornstudio-react";

// documentation: https://www.npmjs.com/package/unicornstudio-react
export default function AnimateComponent() {
  return (
    <UnicornScene
      projectId="jBxzWun7IhDjOdXLnqid"
      className="dark:w-[1440px]  w-screen "
      height="900px"
      scale={1}
      dpi={1.5}
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
    />
  );
}