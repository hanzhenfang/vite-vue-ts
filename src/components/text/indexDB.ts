let textDB;

const userData = [
  { name: "韩振方", age: 18 },
  { name: "哈哈", age: 12 },
];

export function createNewDB() {
  //1.首先请求用户打开indexDB
  let textDB: IDBDatabase;
  const request = window.indexedDB.open("textDB", 1);
  request.onerror = (event: any) => {
    textDB = event.target.result;
    alert("数据库打开失败");
  };
  //2.当用户同意使用indexDB时，会触发请求的onsuccess函数
  request.onsuccess = (event: any) => {
    textDB = event.target.result;
    console.log("启动成功textDB", textDB);
  };
  request.onupgradeneeded = (event: any) => {
    textDB = event.target.result;
    console.log("DB更新事件触发");
    let objStore: IDBObjectStore;
    objStore = textDB.createObjectStore("userInfo", { keyPath: "name" });
    objStore.createIndex("name", "name", { unique: true });
    objStore.createIndex("age", "age", { unique: false });
    objStore.transaction.oncomplete = (event: any) => {
      const userInfoObjectStore = textDB.transaction("userInfo");
    };
  };
}

function addData(
  db: IDBDatabase,
  dbName: string,
  object: { name: string; age: number }
) {
  const request = db
    .transaction([dbName], "readwrite")
    .objectStore(dbName)
    .add(object);

  request.onsuccess = (event) => {
    console.log("数据写入成功");
  };
  request.onerror = (event) => {
    console.log("数据写入失败");
  };
}
