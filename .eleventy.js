module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy all images from the posts directory
  eleventyConfig.addPassthroughCopy("src/posts/**/*.png");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/posts/**/*.gif");


  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};