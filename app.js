// let hello = "Hello World";
// let str1 = "Hello";
// let str2 = "World!!";

// alert(str1+str2);

// let orgin = 120;
// let apple = 100;

// if (orgin < apple) {
//   alert('みかんの値段がりんごより安い');
// }else if(orgin==apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }


// let max = 100;
// let num = 1;
// let count = 0;

// while(num<max){
//   num = num*2;
//   count = count+1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

//3章 関数

// メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamo");

// //変数の中身をアラートで表示する
// alert(alertString);

// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// 入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');



// じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// alert('JSの選んだ手は' + js_hand + 'です。');

// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//   // js_handを定義する
//   let js_hand;

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if( user == "グー" || user == "チョキ" || user == "パー"){
    if(user == "グー"){
      if(js == "グー"){
        winLoseStr = "あいこ";
      } else if(js == "チョキ"){
        winLoseStr = "勝ち";
      } else if(js == "パー"){
        winLoseStr = "負け";
      }
    } else if(user == "チョキ"){
      if(js == "グー"){
        winLoseStr = "負け";
      } else if(js == "チョキ"){
        winLoseStr = "あいこ";
      } else if(js == "パー"){
        winLoseStr = "勝ち";
      }
    } else if(user == "パー"){
      if(js == "グー"){
        winLoseStr = "勝ち";
      } else if(js == "チョキ"){
        winLoseStr = "負け";
      } else if(js == "パー"){
        winLoseStr = "あいこ";
      }
    }

  }else if( user == "null"){
    winLoseStr = "またチャレンジしてね";
  }else{
    winLoseStr = "グー・チョキ・パーのいずれかを入力してください";
  }
  return winLoseStr;
}