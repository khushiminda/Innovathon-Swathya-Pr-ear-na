import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "/Build/Webgl build.loader.js",
    dataUrl: "/Build/Webgl build.data.br",
    frameworkUrl: "/Build/Webgl build.framework.js.br",
    codeUrl: "/Build/Webgl build.wasm.br",
});

function Evaluation() {
  return <Unity style={{width:"80%"}} unityContext={UnityContext} />;
}
export default Evaluation;

