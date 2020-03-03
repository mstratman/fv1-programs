#!/bin/bash

#for file in `find ./static -type f -name "*.spn" | grep -v "static/files/spinsemi/" | grep -v "static/files/slacker-bf/"`; do
for file in `find ./static -type f -name "*.spn"`; do
  file $file | grep -v CRLF
  if [ $? == 0 ]; then
    perl -pi -e 's/\n/\r\n/' $file
  fi
done
