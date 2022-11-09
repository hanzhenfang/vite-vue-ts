const { emitWarning } = require("process");

console.log("23");
const promise = new Promise((resolve, reject) => {
  console.log("应用");
  // resolve("成功");
  reject("失败");
  console.log("我是promise");
});

console.log("啊");
promise
  .then((winer) => {
    console.log("winer", winer);
    return function () {
      console.log("promise 能接受返回函数吗");
    };
  })
  .then((winer) => {
    console.log("winer", winer);
  })
  .catch((err) => {
    console.log("err1111", err);
  });
promise.finally(() => {
  console.log("反之我执行");
});

console.log("哈哈222");
