#!/bin/bash

for file in static/files/*.spn static/files/*/*.spn; do
  file $file | grep -v CRLF
  if [ $? == 0 ]; then
    perl -pi -e 's/\n/\r\n/' $file
  fi
done
