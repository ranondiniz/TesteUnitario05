const subtrair = require('./subtrair');

test('Deveria subtrair 1 - 2 e retornar -1', () => {
    expect(subtrair(1, 2)).toBe(-1);
});

test('Deveria subtarir -1 - (-1) e retornar 0', () => {
    expect(subtrair(-1, -1)).toBe(0);
});