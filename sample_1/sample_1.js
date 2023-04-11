//varのスコープ
// var str = "webcamp" //グローバルスコープ

// //foo関数
// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

//foo関数内で定義された関数は「関数スコープ」と呼ばれ、関数内でしか使用できない.



//letのスコープ
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

//yはブロック内で定義されているため、ブロック外から参照することはできない。


//巻き上げ
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

