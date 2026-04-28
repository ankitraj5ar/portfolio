import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ankit Raj Portfolio",
    short_name: "Ankit Raj",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f7f4",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
