#!/bin/bash

# Script to package Chrome extension for Chrome Web Store submission

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Packaging Chrome extension for submission...${NC}"

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check if chrome directory exists
if [ ! -d "chrome" ]; then
    echo -e "${YELLOW}Error: chrome directory not found!${NC}"
    exit 1
fi

# Create zip file
ZIP_NAME="max-page-size-extension.zip"

echo "Creating ZIP file: $ZIP_NAME"

# Remove old zip if it exists
if [ -f "$ZIP_NAME" ]; then
    rm "$ZIP_NAME"
    echo "Removed old ZIP file"
fi

# Create zip from chrome directory contents
cd chrome
zip -r "../$ZIP_NAME" . -x "*.DS_Store" "*.git*" "*.zip"
cd ..

if [ -f "$ZIP_NAME" ]; then
    echo -e "${GREEN}✓ Successfully created: $ZIP_NAME${NC}"
    echo -e "${GREEN}✓ File size: $(du -h "$ZIP_NAME" | cut -f1)${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://chrome.google.com/webstore/devconsole"
    echo "2. Click 'New Item'"
    echo "3. Upload $ZIP_NAME"
else
    echo -e "${YELLOW}Error: Failed to create ZIP file${NC}"
    exit 1
fi

