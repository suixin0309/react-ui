#!/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update2"
git push
git checkout -