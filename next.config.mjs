/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            //{hostname: 'catalogofadrix.online'},           
            {hostname: 'image.tmdb.org'}, 
            ]
        }
};

export default nextConfig;
