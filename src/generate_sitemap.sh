#!/bin/bash

# Get the directory of the current script
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd $SCRIPT_DIR

# Define the base URL of your site
BASE_URL="https://mazaheri.uk"

# Define the directory containing the posts
POSTS_DIR="./posts"

# Create or overwrite the sitemap.xml file
SITEMAP_FILE="./sitemap.xml"
echo '<?xml version="1.0" encoding="UTF-8"?>' > $SITEMAP_FILE
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> $SITEMAP_FILE

# Find all subfolders in the posts directory and add them to the sitemap
find $POSTS_DIR -type d | while read -r dir; do
    # Remove the leading './' from the directory path
    dir=${dir#./}
    
    echo "  <url>" >> $SITEMAP_FILE
    echo "    <loc>$BASE_URL/$dir/</loc>" >> $SITEMAP_FILE
    echo "    <lastmod>$(date +'%Y-%m-%d')</lastmod>" >> $SITEMAP_FILE
    echo "  </url>" >> $SITEMAP_FILE
done

# Close the urlset tag
echo '</urlset>' >> $SITEMAP_FILE

echo "Sitemap generated successfully at $SITEMAP_FILE"