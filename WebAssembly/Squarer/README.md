Compile to WASM using:-   
emcc -o squareFn.wasm -O3 -s WASM=1 -s ONLY_MY_CODE=1 -s SIDE_MODULE=1 squarer.c