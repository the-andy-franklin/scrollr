/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname:
          "/free-vector/botanical-capital-letter-s-vector_53876-127458.jpg",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random/50x50",
      },
    ],
  },
};

module.exports = nextConfig;
