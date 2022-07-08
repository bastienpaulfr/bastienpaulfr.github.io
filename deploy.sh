#!/bin/sh

export ORGANIZATION_NAME=bastienpaulfr
export PROJECT_NAME=bastienpaulfr.github.io
export DEPLOYMENT_BRANCH=gh-pages
export USE_SSH=true

GIT_USER=bastienpaulfr yarn run deploy
