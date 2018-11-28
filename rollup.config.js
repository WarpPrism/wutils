import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const env = process.env.NODE_ENV
const chalk = require('chalk')

if (env) {
  console.log( chalk.white.bgCyan.bold('[process env]:', env.toUpperCase()) )
}

const joinPath = (dir) => {
  return path.join(__dirname, dir);
}

// 设置输出模块格式, 可用模块类型有：
// amd – 异步模块定义，用于像RequireJS这样的模块加载器
// cjs – CommonJS，适用于 Node 和 Browserify/Webpack
// es – 将软件包保存为ES模块文件
// iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
// umd – 通用模块定义，以amd，cjs 和 iife 为一体
const OUTPUT_MODULE_TYPE = 'es'

export default {
  input: 'src/main.js',
  output: {
    file: env === 'development' ? 'dist/wutils.dev.js' : 'dist/wutils.js',
    format: OUTPUT_MODULE_TYPE,
    name: 'wutils',
    sourcemap: env === 'development' ? false : true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    // 代码压缩
    (env === 'production' && terser())
  ]
};
