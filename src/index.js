/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1)

// // vatは再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1)

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き"

// // constは再宣言不可
// const val3 = "const変数を再宣言"

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Kame",
//   age: 28
// };
// val4.name = "Kameo";
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "kame";
// const age = 18;
// // 「私の名前はkameです．名前は18歳です．」

// // 従来の方法
// const message1 = "私の名前は" + name + "です．年齢は" + age + "です．";
// console.log(message1);

// // テンプレート文字列を用いた方法 バッククォートを使う．
// const message2 = `私の名前は${name}です．年齢は${age}です．`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// 関数を変数に代入する
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // 引数が1つの場合，()を省略できるが，保存時に補完される．
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// // 中の処理が単一式の場合，returnを省略できる
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "かめ",
//   age: 18
// };

// // const message1 = `名前は${myProfile.name}です．年齢は${myProfile.age}歳です．`
// // console.log(message1)

// const { name, age } = myProfile;
// const message2 = `名前は${name}です．年齢は${age}歳です．`;
// console.log(message2);

// const myProfile = ["かめ", 18];
// const message3 = `名前は${myProfile[0]}です．年齢は${myProfile[1]}歳です．`;
// console.log(message3);
// // 配列なので，配列で受け取る．
// const [name, age] = myProfile;
// const message4 = `名前は${name}です．年齢は${age}歳です．`;
// console.log(message4);

/**
 * デフォルト値，引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("かめ");
// sayHello();

/**
 * スプレッド構文 ...xx
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // よく，分割代入と一緒に使う
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー，結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // 浅いコピー
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "杉田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // mapの引数に，アロー関数を入れる．引数が，要素
// // returnに対して新しい配列を生成する．
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // 各要素を処理する．
// nameArr.map((name) => console.log(name));
// // 二つ目の引数が，index
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です．`));

// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newArr);
// const newArr1 = numArr.filter((num) => num % 2 === 0);
// console.log(newArr1);

// const newNameArr = nameArr.map((name) => {
//   if (name === "杉田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(20, 50));

/**
 * 論理演算子の本当の意味を知ろう
 */
// || は左側がfalseなら右側を返す．
const num = 100;
const fee = num || "金額未設定です．";
console.log(fee);

// && は，左側がtrueなら右側を返す．
const num2 = null;
const fee2 = num2 && "何か設定されました．";
console.log(fee2);
