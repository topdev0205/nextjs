import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/Build.loader.js",
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Unity unityContext={unityContext} />
    </div>
  )
}
