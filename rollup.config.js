import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";
// import replace from "rollup-plugin-replace";
// import builtins from "rollup-plugin-node-builtins";
// import globals from "rollup-plugin-node-globals";

export default {
  input: ["src/app.jsx"],
  output: [
    // ES module version, for modern browsers
    {
      dir: "public/module",
      format: "es",
      sourcemap: true
    },
    // SystemJS version, for older browsers
    {
      dir: "public/nomodule",
      format: "system",
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve({
        jsnext: true,
        browser: true,
        preferBuiltins: false,
    }),
    commonjs({
        include: "node_modules/**",
        namedExports: {
            "./node_modules/react/index.js": [
                "cloneElement",
                "createElement",
                "PropTypes",
                "Children",
                "Component",
                "createFactory",
                "PureComponent",
                "lazy",
                "Suspense",
            ],
        },
    }),
    babel({
        exclude: "node_modules/**",
    }),
    // globals(),
    // builtins(),
]
};
