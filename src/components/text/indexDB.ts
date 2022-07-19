let textDB;

export function createNewDB() {
  const request = window.indexedDB.open("textDB");
  request.onerror = (event) => {
    alert("数据库打开失败");
  };
  request.onsuccess=(event)=>{
    console.log('%%%event',event)
    textDB=request.result
    console.log('@@textDB',textDB)
  }
}
