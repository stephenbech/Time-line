/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    domains:[
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "https://disneyplus-clone-2eb8a.firebaseapp.com/__/auth/handler",
    ], 
    unoptimized: true
  },

  output: "standalone",
}



module.exports = nextConfig
