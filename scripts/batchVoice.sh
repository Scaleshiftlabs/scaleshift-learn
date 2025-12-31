#!/bin/bash

COURSE_ID="DM-001"
VOICE="Samantha"

for m in {1..10}; do
  for l in {1..3}; do
    SCRIPT="Lesson $l of Module $m. This lesson explains the concept clearly."
    AUDIO="public/audio/$COURSE_ID/m$m-l$l.mp3"
    VIDEO="public/videos/$COURSE_ID/m$m-l$l.mp4"
    TMP="public/videos/$COURSE_ID/tmp-m$m-l$l.mp4"

    mkdir -p public/audio/$COURSE_ID

    say -v "$VOICE" "$SCRIPT" -o /tmp/tmp.aiff
    ffmpeg -y -i /tmp/tmp.aiff "$AUDIO"

    ffmpeg -y -i "$VIDEO" -i "$AUDIO" \
      -c:v copy -c:a aac -shortest "$TMP"

    mv "$TMP" "$VIDEO"
    echo "✔ Narrated m$m-l$l"
  done
done
