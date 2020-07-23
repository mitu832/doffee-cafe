$(function () {
  var loading = $("#loading"); //ローディングエリアを取得
  var hidden = function(){ //ローディングエリアを隠す処理
    loading.fadeOut(1500); //1500ミリ秒かけてフェードアウト
  };
  setTimeout(hidden,2000); //2000ミリ秒後にloadingFunc開始
});