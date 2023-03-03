const totalPrice = require('./totalPrice')

test('The Price Total', () => {
  expect(totalPrice(10)).toBe(20)
})
// const spyConsoleLog = jest.spyOn(console, 'log')
// spyConsoleLog.mockImplementation(x => 10)

// test('spy test', () => {
//   totalPrice(true);
//   expect(console.log).toBeCalled();
//   expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
//   // spyConsoleLog.mockReset();
//   // spyConsoleLog.mockRestore();
// })

// //research on to[ic Mocking
// //research on topic snap testing  