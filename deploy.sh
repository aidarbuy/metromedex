#!/bin/bash
STRING="done."
clear
echo "Deleting build directory:"
rm -rf build
echo $STRING
echo "..."

echo "Building:"
npm run build
echo $STRING
echo "..."

echo "Deployng to Firebase:"
firebase deploy
echo $STRING
echo "..."

# echo "Starting localhost:"
# npm start
# echo $STRING
# echo "..."