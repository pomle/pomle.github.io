DIR=$(dirname $0)

# nes-remote
rm -rf "$DIR/../nes-remote" && \
   mkdir -p "$DIR/../nes-remote" && \
   cp -r "$DIR/nes-remote/src/"* "$DIR/../nes-remote/"
