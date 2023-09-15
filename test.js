import deepClone from './immer'

const dummyObject = {
    name : 'hi',
    age : 24
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
    ])
  };

const clonedObject = deepClone(originalObject);

test("primitive number test", () => {
    expect(clonedObject.age === originalObject.age).toBe(true);
})

test("primitive string test", () => {
    expect(clonedObject.name === originalObject.name).toBe(true);
})

test('Object test', () => {
    expect(clonedObject.address === originalObject.address).toBe(false);
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
  