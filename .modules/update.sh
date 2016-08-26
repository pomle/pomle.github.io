DIR=$(dirname $0)

git submodule foreach git pull origin master

# nes-remote
rm -rf "$DIR/../nes-remote" && \
   mkdir -p "$DIR/../nes-remote" && \
   cp -r "$DIR/nes-remote/src/"* "$DIR/../nes-remote/"

# tetris
rm -rf "$DIR/../tetris" && \
   mkdir -p "$DIR/../tetris" && \
   cp -r "$DIR/tetris/"* "$DIR/../tetris/"

git commit -a -m "Auto Update."
