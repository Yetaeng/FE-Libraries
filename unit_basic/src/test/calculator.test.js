const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator(); // 각각의 테스트는 독립적으로 만드는 것이 중요하므로 새로운 오브젝트를 테스트마다 만들어준다. beforeEach 사용
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("set", () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it("clear", () => {
    cal.set(100);
    cal.clear(0);
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(5);
    cal.add(5);
    expect(cal.value).toBe(10);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      // expect콜백안에서 우라가 예상하는 바를 작성
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract", () => {
    cal.set(100);
    cal.subtract(10);
    expect(cal.value).toBe(90);
  });

  it("multiply", () => {
    cal.set(3);
    cal.multiply(5);
    expect(cal.value).toBe(15);
  });

  describe("divide", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
