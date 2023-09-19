// Date 객체 복사
const copyDate = (data) => {
  return new Date(data);
}
// RegExp 객체 복사
const copyRegExp = (data) => {
  return new RegExp(data);
}
// Map 객체 복사
const copyMap = (data) => {
  const clonedMap = new Map();
  data.forEach((value, key) => {
    clonedMap.set(key, deepClone(value));
  });
  return clonedMap;
}
// WeakMap 객체 복사
const copyWeakMap = (data) => {
  const clonedWeakMap = new WeakMap();
  for(const [key, value] in data) {
    clonedWeakMap.set(key, value); // 키와 값을 그대로 복사
  }
  return clonedWeakMap
}
// Set 객체 복사
const copySet = (data) => {
  const clonedSet = new Set();
  data.forEach((value) => {
    clonedSet.add(deepClone(value));
  });
  return clonedSet;
}
// WeakSet 객체 복사
const copyWeakSet = (data) => {
  const clonedWeakSet = new WeakSet();
  for(const [key, value] in data) {
    clonedWeakSet.add(key, value); // 키와 값을 그대로 복사
  }
  
  return clonedWeakSet;
}
// Symbol 복사
const copySymbol = (originSymbol) => {
  return Symbol(originSymbol.description);
}
// 객체 속성 복사
const copyObject = (data) => {
  const clonedObj = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(data[key]);
    }
  }
  return clonedObj;
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      if(typeof obj === 'symbol'){
        return copySymbol(obj); // symbol 자료형 
      }
      return obj; // 기본 자료형이나 null인 경우 그대로 반환
    }
  
    if (obj instanceof Date) {
      return copyDate(obj); // Date 객체 복사
    }

    if (obj instanceof RegExp) { 
      return copyRegExp(obj); // RegExp 객체 복사
    }
  
    if (obj instanceof Map) {
      return copyMap(obj); // Map 객체 복사
    }
    
    if (obj instanceof WeakMap) {
      return copyWeakMap(obj); // WeakMap 객체 복사
    } 
  
    if (obj instanceof Set) {
      return copySet(obj); // Set 객체 복사
    }

    if (obj instanceof WeakSet) {
      return copyWeakSet(obj); // WeakSet 객체 복사
    }
  
    if (Array.isArray(obj)) {
      return obj.map(v=> deepClone(v));
    }

    return copyObject(obj); // 객체 속성 복사
  }

export default deepClone
