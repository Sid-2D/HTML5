Compile to WASM using:-   
`emcc -o squareFn.wasm -O3 -s WASM=1 -s ONLY_MY_CODE=1 -s SIDE_MODULE=1 -s EXPORTED_FUNCTIONS='["_squarer"]' squarer.c`   
  
OR    
   
`emmake make`  
  
- The output can be viewed in Console.  
- Run using server, `node server.js`