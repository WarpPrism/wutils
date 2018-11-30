// 设计模式，设计模式是解决某个特定场景下对某种问题的解决方案。

// 单例模式：一个类只能构造出唯一实例
export const createSingleton = function(fn) {
  let instance
  return function() {
    if (instance) {
      return instance
    } else {
      return fn.apply(this, arguments)
    }
  }
}

// 适配器模式：主要用于解决两个接口之间不匹配的问题。
// 常用于把一个接口的数据格式转为另一种
// let adaptor = function(fn1_form) {
//   let fn2_form = handle(fn1_form)
//   return fn2_form
// }

// 装饰器模式：动态地给函数赋能。
// AOP 装饰函数
export const decorateFn = function(fn) {
  fn.before = (beforeFn) => {
    beforeFn.apply(this, arguments)
    fn.apply(this, arguments)
  }
  fn.after = (afterFn) => {
    fn.apply(this, arguments)
    afterFn.apply(this, arguments)
  }
}


// 职责链模式：类似多米诺骨牌，通过请求第一个条件，会持续执行后续的条件，直到返回结果为止。
// 重要性：4 星，在项目中能对 if-else 语句进行优化
const CHAIN_FINISH = 'CHAIN_FINISH'
export const Chain = function(fn) {
  this.fn = fn
  this.nextChain = null
}
Chain.prototype.setNextChain = function(chain) {
  this.nextChain = chain
}
Chain.prototype.exec = function() {
  const result = this.fn.apply(this, arguments)
  if (result === CHAIN_FINISH) {
    this.nextChain.exec.apply(this.nextChain, arguments)
  }
}


/**
 * @desc 简单观察者模式, a.k.a. 发布订阅模式
 * @return {Object} observer [观察者对象]
*/
export const createObserver = function() {
  let observer = {};
  observer = {
    handlers: {},
    listen: function(event, handler) {
      if (!this.handlers[event]) {
        this.handlers[event] = [];
      }
      this.handlers[event].push(handler);
    },
    trigger: function(event, data=null) {
      if (!event || !this.handlers[event]) {
        console.warn('[Observer Module] No such event to be trigered: ' + event);
      } else {
        for (let i = 0; i < this.handlers[event].length; i++) {
          let foo = this.handlers[event][i];
          foo(data);
        }
      }
    },
    remove: function(event, handler) {
      let handlers = this.handlers[event];
      if (Array.isArray(handlers)) {
        handlers.forEach(function(item, index) {
          if (item == handler) {
            handlers.splice(index, 1);
            return;
          }
        });
      } else {
        console.warn('[Observer Module] No such event to be removed: ' + event);
      }
    }
  }
  return observer;
}
