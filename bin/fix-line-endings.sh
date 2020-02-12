#!/bin/bash

for file in `find . -type f -name "*.spn"`; do
  file $file | grep -v CRLF
  if [ $? == 0 ]; then
    perl -pi -e 's/\n/\r\n/' $file
  fi
done
