require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("../../Route/Index").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://infograinsdevelopment.herokuapp.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();