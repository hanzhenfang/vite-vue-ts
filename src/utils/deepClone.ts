//深拷贝工具

export function deepClone(obj: Record<string, any>) {
  let obj2: Record<string, string | object> = {};
  for (let key in obj) {
    if (obj[key] && obj[key] instanceof Object) {
      deepClone(obj[key]);
    }
    else {
      obj2[key] = obj[key]
    }
  }
  return obj2;
}

const person1 = {
  name: "韩",
  age: 18,
  fridens: {
    name1: "小红",
    name2: "小黄"
  }
};

function deepClone_(obj: Record<string, any>) {
  let obj2: Record<string, any> = {};
  for (let key in obj) {
    if (obj[key] && obj[key] instanceof Object) {
      for (let key1 in obj[key][key]) {
        obj2[key][key1] = obj[key][key1]
      }
    }
    else {
      obj2[key] = obj[key]
    }
  }
  return obj2;
}