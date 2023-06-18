import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";

export default function App({ Component, pageProps }: AppProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        className='-z-10 fixed'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#372549",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              repulse: {
                distance: 20,
                duration: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#BBBBBF",
            },
            links: {
              color: "#BBBBBF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1100,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <GoogleAnalytics gaMeasurementId="G-5GES0RQTCG" />
      <Component {...pageProps} />
    </>
  )
}
