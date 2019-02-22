# rollup-starter-code-splitting

This repo contains steps to reproduce an error message related to code-splitting and react:  

`SyntaxError: Identifier 'React' has already been declared`


```bash
git clone https://github.com/camille-hdl/rollup-starter-code-splitting
cd rollup-starter-code-splitting
npm install
npm run build
npm start
```

Navigate to [localhost:5000](http://localhost:5000).

This example uses:

* react, react-dom
* babel
* rollup-plugin-babel
* rollup-plugin-commonjs
* rollup-plugin-node-resolve
