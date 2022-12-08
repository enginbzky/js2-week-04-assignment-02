import { isTheWordSplit } from "./functions.js";

test("According to the given parameter, the result should be hello,cat", () => {
  let result = isTheWordSplit([
    "hellocat",
    "apple,bat,cat,goodbye,hello,yellow,why",
  ]);
  expect(result).toBe("hello,cat");
});

test("According to the given parameter, the result should be base,ball", () => {
  let result = isTheWordSplit([
    "baseball",
    "a,all,b,ball,bas,base,cat,code,d,e,quit,z",
  ]);
  expect(result).toBe("base,ball");
});

test("According to the given parameter, the result should be abcg,efd", () => {
  let result = isTheWordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]);
  expect(result).toBe("abcg,efd");
});

test("According to the given parameter, the result should be not possible", () => {
  let result = isTheWordSplit([
    "hicoders",
    "code,coder,hi,hicode,hicoder,hicoders",
  ]);
  expect(result).toBe("not possible");
});
