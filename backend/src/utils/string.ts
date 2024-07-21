export function getPhonemes(value: string) {
  const strippedValue = value.replace(' ' , '');
  const consonants = strippedValue
    .split('')
    .filter(e => e.match(/[^aeiou]/) != null)
    .length;

  return {
    consonants,
    vowels: strippedValue.length - consonants,
  }
}

export function reverse(value: string) {
  return value.split('').reverse().join('');
}
