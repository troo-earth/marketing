import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Globe3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0 / 255, 116 / 255, 115 / 255],
      glowColor: [0.8, 0.9, 0.9],
      markers: [
        { location: [37.7595, -122.4367], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.04 },
        { location: [51.5074, -0.1278], size: 0.04 },
        { location: [35.6762, 139.6503], size: 0.04 },
        { location: [-33.8688, 151.2093], size: 0.04 },
        { location: [12.9716, 77.5946], size: 0.04 },
        { location: [25.2048, 55.2708], size: 0.04 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
};

export default Globe3D;
