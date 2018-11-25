# wutils 通用前端工具库

主要封装业务中常用的函数，特别是lodash未实现的一些业务函数，但一定程度上和lodash有交集。如果lodash已实现同样功能的函数，建议采用lodash。

## 技术选型
rollup打包、ES6编码、babel7.0转译、jest测试
~~~
# 构建
npm run build
# 测试
npm run test
# 只测试某一个模块 e.g.
npm run test array.test.js
~~~

## 使用方法

## 模块分类说明

### array

- isArr
- quickSortArr
- uniqueArr
- shuffleArr
- binarySearchArr

### date

- formatDate
- getDateObj

### dom

- hasClass
- addClass
- removeClass

### function

- debounce (同lodash.debounce)
- throttle (同lodash.throttle)

### object

- isPlainObj
- isEmptyObj
- extend (同jQuery.extend)
- stringfyQueryString

### platform

- getOS
- getBrowser
- isWeixin

### print

- chalkPrint

### random

- randomColor
- randomInt
- randomString

### regexp

- isEmail
- isIdCard
- isPhoneNum
- isUrl

### storage

- setCookie
- getCookie
- removeCookie

### string

- upcaseMoney
- replaceXSS
- parseQueryString
- b64EncodeUnicode
- b64DecodeUnicode

> 持续更新中