const { format } = require("date-fns");


module.exports = async function(eleventyConfig) {
  
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);


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

  eleventyConfig.addPassthroughCopy("src/CNAME");
  
  //after directing the domain on the repository, pathPrefix is not needed
  const pathPrefix = ""; // or /site/
  eleventyConfig.addGlobalData("pathPrefix",pathPrefix);

  // Add a filter to convert markdown links to HTML links with target="_blank"
  eleventyConfig.addFilter("externalLinks", function(content) {
    
    //console.log("Original content:", content);
    const updatedContent = content.replace(/<a\s+href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank"');
    //console.log("Updated content:", updatedContent);
    return updatedContent
  });


  return {    
    pathPrefix: pathPrefix,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

