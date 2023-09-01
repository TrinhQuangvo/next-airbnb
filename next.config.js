/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    remotePatterns: [
        {
            protocol: "https",
            hostname: "*.googleusercontent.com",
            port: "",
            pathname: "**",
        },
    ],
    images: {
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com'
        ]
    }
}

module.exports = nextConfig