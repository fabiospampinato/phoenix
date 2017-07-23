
mogrify -filter bohman -resize 960x600 *.png
convert -layers OptimizePlus -delay 1x2 -loop 0 *.png animation.gif
find *.png -delete
