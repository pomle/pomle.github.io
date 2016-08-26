DIR=$(dirname $0)

git submodule update --recursive

# nes-remote
rm -rf "$DIR/../nes-remote" && \
   mkdir -p "$DIR/../nes-remote" && \
   cp -r "$DIR/nes-remote/src/"* "$DIR/../nes-remote/"

# tetris
rm -rf "$DIR/../tetris" && \
   mkdir -p "$DIR/../tetris" && \
   cp -r "$DIR/tetris/"* "$DIR/../tetris/"
