import maxInList from "./max-in-list-kata";

test("returns biggest number in array", () => {
    expect(maxInList([1,2,3,4,5])).toBe(5);
  });

test("returns biggest number in array with negatives", () => {
    expect(maxInList([-1,-2,-3,-4,-5])).toBe(-1);
  }); 

  test("should return undefined for an empty array", () => {
    const numbers: number[] = [];
    const result = maxInList(numbers);
    expect(result).toBeUndefined();
    expect(numbers).toHaveLength(0);
 });
 
 
