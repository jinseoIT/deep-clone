function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // 기본 자료형이나 null인 경우 그대로 반환
    }
  
    if (obj instanceof Date) {
      return new Date(obj); // Date 객체 복사
    }

    if (obj instanceof RegExp) { // RegExp 객체 복사
      return new RegExp(obj);
    }
  
    if (obj instanceof Map) {
      const clonedMap = new Map();
      obj.forEach((value, key) => {
        clonedMap.set(key, deepClone(value)); // Map 객체 복사
      });
      return clonedMap;
    }
  
    if (obj instanceof Set) {
      const clonedSet = new Set();
      obj.forEach((value) => {
        clonedSet.add(deepClone(value)); // Set 객체 복사
      });
      return clonedSet;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(v=> deepClone(v));
    }
  
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]); // 객체 속성 복사
      }
    }
    return clonedObj;
  }

export default deepClone
