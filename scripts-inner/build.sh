#!/usr/bin/env bash -e

rm -rf "${PWD}/lib"
babel src -d lib
