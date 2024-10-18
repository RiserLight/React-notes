/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:async ()=>([
    {
      source:"/about",
      destination:"/",
      permanent:false
    },
    {
      source:"/users/:path*",
      destination:"/",
      permanent:false
    }
  ]
  ),
  export:"output"
}

module.exports = nextConfig
