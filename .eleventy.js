const { format } = require("date-fns");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addFilter("formatDate", (date, formatStr) => {
    const validDate = date ? new Date(date) : new Date();
    if (isNaN(validDate)) {
      throw new Error(`Invalid date: ${date}`);
    }
    return format(validDate, formatStr);
  });
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy all images from the posts directory
  eleventyConfig.addPassthroughCopy("src/posts/**/*.png");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.gif");
  
  // Set a global data variable for the base URL
  eleventyConfig.addGlobalData("baseUrl",'/site/');
  
  return {    
    pathPrefix: "site",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};