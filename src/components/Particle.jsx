import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
  return (
   <Particles
   id="='tsparticles"
   init={particlesInit}
   Loaded={particlesLoaded}

   options={{
   
            
        background: {
            color: {
                value: "#0000",
            },
        },
        fullScreen:{
            zIndex:-1
        },
        fpsLimit: 100,

        interactivity: {
           
          
        },
        particles: {
            color: {
                value: [
                  'BB4D10',
                  '#00e600',
                  '#BD740F',
                  '#ff1ac6',
                  '#5F4DAF',
                  '#ffff00',
                ],
              },
            links: {
                color: "",
                distance: 500,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 5000,
                },
                value: 80,
            },
            opacity: {
                value:0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        // detectRetina: true,

   }}
   />
  )
}

export default Particle