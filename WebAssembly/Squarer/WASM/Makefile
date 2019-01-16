PROJ=squarer

CC=emcc

CFLAGS=-O3 -s WASM=1 -s ONLY_MY_CODE=1 -s SIDE_MODULE=1

$(PROJ).wasm: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^