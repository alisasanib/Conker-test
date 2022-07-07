import { evaluate, multiply, fraction, add, floor, MathType } from 'mathjs';

export function changeNumbersInString(
  number: any,
  defaultServing: number,
  currentServing: number
) {
  number = number.includes('/')
    ? fraction(number).n / fraction(number).d
    : number;
  number = typeof number === 'string' ? Number(number) : number;
  const sum: any = multiply(
    fraction(number / defaultServing),
    fraction(currentServing)
  );
  const result = `${floor(sum.n / sum.d) !== 0 ? floor(sum.n / sum.d) : ''} ${
    sum.n % sum.d !== 0 ? `${sum.n % sum.d}/${sum.d}` : ''
  }`;
  return result;
}

export function combineFractions(updated: string[]) {
  const combineUpdated = updated.map((ingredient: any) => {
    const arrayOfIngredient = ingredient.trim().split(/\s+/);
    for (let i = 0; i < arrayOfIngredient.length - 2; i++) {
      if (
        arrayOfIngredient[i].includes('/') &&
        arrayOfIngredient[i + 1].includes('/')
      ) {
        const computedCombination = add(
          fraction(arrayOfIngredient[i]),
          fraction(arrayOfIngredient[i + 1])
        );
        arrayOfIngredient[
          i
        ] = `${computedCombination.n}/${computedCombination.d}`;
        arrayOfIngredient.splice(i + 1, 1);
      }
      if (arrayOfIngredient[i].includes('/')) {
        if (
          fraction(arrayOfIngredient[i]).n === fraction(arrayOfIngredient[i]).d
        ) {
          if (
            arrayOfIngredient[i - 1] &&
            !isNaN(Number(arrayOfIngredient[i - 1]))
          ) {
            arrayOfIngredient[i - 1] = Number(arrayOfIngredient[i - 1]) + 1;
            arrayOfIngredient.splice(i, 1);
          } else {
            arrayOfIngredient[i] = '1';
          }
        }
      }
      if (
        checkIfBothAreNumber(arrayOfIngredient[i], arrayOfIngredient[i + 1])
      ) {
        mergeTwoNumbers(arrayOfIngredient, i, i + 1);
      }
      if (
        arrayOfIngredient[i + 2] &&
        checkIfBothAreNumber(arrayOfIngredient[i], arrayOfIngredient[i + 2])
      ) {
        mergeTwoNumbers(arrayOfIngredient, i, i + 2);
      }
    }
    return arrayOfIngredient.join(' ');
  });
  return combineUpdated;
}

const checkIfBothAreNumber = (el1: string, el2: string) => {
  return !isNaN(Number(el1)) && !isNaN(Number(el2));
};

const mergeTwoNumbers = (array: number[], i: number, j: number) => {
  array[i] = Number(array[i]) + Number(array[j]);
  array.splice(j, 1);
};
