import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import path from 'path';

const joinPath = (dir) => {
  return path.join(__dirname, dir);
}

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/wutil.js',
    format: 'umd',
    name: 'wutil'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
    // alias({
    //   '@': joinPath('src'),
    //   'array': joinPath('src/array/array.js'),
    //   'print': joinPath('src/print/print.js'),
    // })
  ]
};
