// // 従来：

// var vall = "var 変数";
// console.log(vall);

// //var変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// //var変数は再宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let var2 = "let変数";
// console.log(var2);

// var2 = "let変数を上書き";
// console.log(var2);

// //letは再宣言不可能
// let var2 = "let変数を再宣言";

// const var3 = "const変数"

// console.log(var3);

// //
// const var4 = {
//   name:"han",age:25
// }


// var4.name = "Jiachen";
// var4.address = "Tokyo";
// console.log(var4);

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push = "monkey";

// console.log(val5);


// テンプレート文字列
// const name = "han";
// const age = 25;
// const message1 = "私の名前は" + name + "です、年齢は" + age +"歳です。"
// console.log(message1) 

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です、年齢は${age}歳です。`
// console.log(message2);

// アロー関数
//従来の方法
// function func1(str){
//   return str
// }
// console.log(func1("func1です。"))

const func1 = function (str){
  return str
}

console.log(func1("func1です。"))

//アロー関数の方法
// const func2 = (str) =>{
//   return str
// }
// console.log(func2("func2です"))

// const func3 = (num1,num2) => num1 + num2
// console.log(func3(10,20))

//分割代入
