#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git status
git add .
git status
echo "Travis build: ${TRAVIS_BUILD_NUMBER}"
git commit -m "Travis build: ${TRAVIS_BUILD_NUMBER}"
branch_name="$(git symbolic-ref HEAD 2>/dev/null)"
echo $branch_name
branch_name=${branch_name##refs/heads/}
echo $branch_name
git push "https://${GH_TOKEN}@github.com/limonte/sweetalert2.git" origin HEAD:$branch_name
