const copyDate = (data) => {
  return new Date(data);
}
const copyRegExp = (data) => {
  return new RegExp(data);
}
const copyMap = (data) => {
  const clonedMap = new Map();
  data.forEach((value, key) => {
    clonedMap.set(key, deepClone(value));
  });
  return clonedMap;
}
const copyWeakMap = (data) => {
  const clonedWeakMap = new WeakMap();
  for(const [key, value] in data) {
    clonedWeakMap.set(key, value); // 키와 값을 그대로 복사
  }
  return clonedWeakMap
}
const copySet = (data) => {
  const clonedSet = new Set();
  data.forEach((value) => {
    clonedSet.add(deepClone(value));
  });
  return clonedSet;
}
const copyWeakSet = (data) => {
  const clonedWeakSet = new WeakSet();
  for(const [key, value] in data) {
    clonedWeakSet.add(key, value); // 키와 값을 그대로 복사
  }
  return clonedWeakSet;
}
const copyArray = (data) => {
  return data.map(v=> deepClone(v));
}
const copySymbol = (originSymbol) => {
  return Symbol(originSymbol.description);
}
const copyObject = (data) => {
  const clonedObj = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(data[key]);
    }
  }
  return clonedObj;
}

const typeMap = new Map([
 [Date, copyDate],
 [RegExp, copyRegExp],
 [Map, copyMap],
 [WeakMap, copyWeakMap],
 [Set, copySet],
 [WeakSet, copyWeakSet],
 [Array, copyArray]
]);

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      if(typeof obj === 'symbol'){
        return copySymbol(obj); // symbol 자료형 
      }
      return obj; // 기본 자료형이나 null인 경우 그대로 반환
    }
  
    for(const [type, copyFn] of typeMap){
      if(obj instanceof type){
        return copyFn(obj);
      }
    }
    
    return copyObject(obj); // 객체 속성 복사
  }

export default deepClone
