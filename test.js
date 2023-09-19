import deepClone from './immer'

const dummyObj = {
    name : 'i am dummy',
    age : 20
}
const mapObj = new Map([['dummy1', dummyObj]])
const weakMapObj = new WeakMap();
weakMapObj.set({ key: 'objectKey' }, dummyObj);
const setObj = new Set([1, 2, 3]);
const weakSetObj = new WeakSet();
weakSetObj.add({ key: 'objectKey' }, dummyObj);
const symbolValue = Symbol('testSymbol');

const dummyObject = {
    name : 'hi',
    age : 24, 
    nothing: null,
    undefined : undefined,
    mapObj: mapObj,
    weakMapObj : weakMapObj,
    setObj: setObj,
    weakSetObj: weakSetObj,
    symbolValue, symbolValue,
    dummyObj: dummyObj
}

// 원본 obj
const originalObject = {
    age: 30,
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'traveling'],
    objList: [dummyObject, dummyObject],
    birthDate: new Date('1990-01-01'),
    favoriteColors: new Set(['red', 'blue']),
    phoneNumbers: new Map([
      ['home', dummyObject],
      ['work', dummyObject]
    ]),
    reg : new RegExp('test', 'g'),
    dummyObject: dummyObject
  };

const clonedObject = deepClone(originalObject);

test("primitive number test", () => {
    expect(clonedObject.age === originalObject.age).toBe(true);
})

test("primitive string test", () => {
    expect(clonedObject.name === originalObject.name).toBe(true);
})

test("primitive null test", () => {
    expect(clonedObject.dummyObject.nothing === clonedObject.dummyObject.nothing).toBe(true);
})

test("primitive undefined test", () => {
    expect(clonedObject.dummyObject.undefined === clonedObject.dummyObject.undefined).toBe(true);
})

test('Object test', () => {
    expect(clonedObject.address === originalObject.address).toBe(false);
})

test('Object deep test', () => {
    expect(clonedObject.dummyObject.dummyObj === originalObject.dummyObject.dummyObj).toBe(false);
})

test('Object Array test1', () => {
    expect(clonedObject.hobbies=== originalObject.hobbies).toBe(false);
})

test('Object Array test2', () => {
    expect(clonedObject.objList[0] === originalObject.objList[0]).toBe(false);
})

test('Object Date test', () => {
    expect(clonedObject.birthDate === originalObject.birthDate).toBe(false);
})

test('Object Set test', () => {
    expect(clonedObject.favoriteColors === originalObject.favoriteColors).toBe(false);
})

test('Object Map test', () => {
    expect(clonedObject.phoneNumbers.get('home') === originalObject.phoneNumbers.get('home')).toBe(false);
})

test ('Object RegExp test', () => {
    expect(clonedObject.reg === originalObject.reg).toBe(false);
})

test ('Object WeakMap test', () => {
    expect(clonedObject.dummyObject.weakMapObj === originalObject.dummyObject.weakMapObj).toBe(false);
})

test ('Object WeakSet test', () => {
    expect(clonedObject.dummyObject.weakSetObj === originalObject.dummyObject.weakSetObj).toBe(false);
})

test ('symbol in object test', () => {
    expect(clonedObject.dummyObject.symbolValue === originalObject.dummyObject.symbolValue).toBe(false);
})
