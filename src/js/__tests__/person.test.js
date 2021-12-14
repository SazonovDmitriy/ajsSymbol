import Person from "../person";

test('order specifications', () => {
    const expected = [
        'name',
        'type',
        'health',
        'level',
        'attack',
        'defence',
    ]

    expect(Object.keys(new Person('person'))).toEqual(expected)
})