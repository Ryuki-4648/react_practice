/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * TypeScriptの基本の型
 */

// boolean
let bool: boolean = true;

// number　数値
let num: number = 0;

// string 文字
let str: string = "AAA";

// Array 配列
let arr1: Array<number> = [0, 1, 2, 3];
let arr2: number[] = [0, 1, 2, 3];

// tuple
let tuple: [number, string] = [0, "AAA"];

// any
// どんな型を入れてもエラーにならない。型を指定している意味がないもの　あまり使わない方が良い
let any1: any = false;

// void 何も返却値がないことを表す
const funcA = (): void => {
  // :void がなくてもfuncAは引数なしのvoid型の関数だと設定される
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "BBBB" };
