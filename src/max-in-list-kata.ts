/**
 * function:
=========
name: maxInList
parameter: NUMBERS: list of numbers
return type: number
pseudo code:
============
set BIGGEST to first element in NUMBERS
for each element N in NUMBERS
    if N is greater than BIGGEST
    set BIGGEST to N
return BIGGEST
*/

function maxInList(numbers: number[]): number {
   let biggest: number | undefined = numbers[0];
   for(let n of numbers){
    if (n > biggest){
        biggest = n
        }
    }
    return biggest
}

export default maxInList;