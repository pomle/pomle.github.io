DIR=$(dirname $0)

git submodule foreach git pull origin master

# nes-remote
rm -rf "$DIR/../nes-remote" && \
   mkdir -p "$DIR/../nes-remote" && \
   cp -r "$DIR/nes-remote/src/"* "$DIR/../nes-remote/"

git commit -a -m "Auto Update."
