const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Ignorar errores de resolución de módulos para recharts
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      recharts: false,
    }
    return config
  },
}

module.exports = nextConfig

