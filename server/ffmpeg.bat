ffmpeg -f gdigrab -framerate 30 -i title=VisualBoyAdvance output.mkv  -vcodec libx264 -b:v 5M -acodec aac -b:a 256k -f flv rtmp://live-lhr.twitch.tv/app/live_473053552_TkRdkItV470le0Xoq3TR4XIbI4s7d1
