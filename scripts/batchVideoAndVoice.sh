#!/bin/bash

COURSE_ID="DM-001"
VOICE="Samantha"

mkdir -p public/videos/$COURSE_ID
mkdir -p public/audio/$COURSE_ID

for m in {1..10}; do
  for l in {1..3}; do
    VIDEO="public/videos/$COURSE_ID/m$m-l$l.mp4"
    TMP="public/videos/$COURSE_ID/tmp-m$m-l$l.mp4"
    AUDIO="public/audio/$COURSE_ID/m$m-l$l.mp3"

    # 1️⃣ Create base video if missing
    if [ ! -f "$VIDEO" ]; then
      ffmpeg -y -f lavfi -i color=c=black:s=1280x720:d=8 \
        -vf "drawtext=text='Module $m · Lesson $l':fontcolor=white:fontsize=42:x=(w-text_w)/2:y=(h-text_h)/2" \
        -c:v libx264 -pix_fmt yuv420p "$VIDEO"
      echo "🎥 Created base video m$m-l$l"
    fi

    # 2️⃣ Generate voice
    say -v "$VOICE" "Lesson $l of Module $m. This lesson explains the concept clearly." -o /tmp/tmp.aiff
    ffmpeg -y -i /tmp/tmp.aiff "$AUDIO"

    # 3️⃣ Merge voice into video
    ffmpeg -y -i "$VIDEO" -i "$AUDIO" \
      -c:v copy -c:a aac -shortest "$TMP"

    mv "$TMP" "$VIDEO"
    echo "✔ Final video ready m$m-l$l"
  done
done
