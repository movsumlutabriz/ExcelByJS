#!/usr/bin/env sh

set -e

npm run build
cd dist

git init
git add -A
git commit -m 'deploying on GitHub Pages'
git push -f git@github.com:movsumlutabriz/ExcelByJS.git master:gh-pages

cd -