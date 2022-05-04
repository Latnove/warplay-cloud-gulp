const isProd = process.argv.includes("--production")
const isDev = !isProd

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  webpack: { mode: isProd ? "development" : "development" },
  
  imagemin: {     
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 3, // 0 to 7 
    verbose: true,
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },
};
