/*
 * @Author: your name
 * @Date: 2023-2-07 11:21:02
 * @LastEditTime: 2023-02-08 09:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \烟花表白(可自定义文字)\talk.js
 */
$(function () {
  // 开始放烟花
  // initAnimate();
  $("#yes").click(function (event) {
    modal("我相信镜镜一定会愿意的。(^_^)", function () {
      $(".page_one").addClass("hide");
      $(".page_two").removeClass("hide");
      // typeWrite();
      //   fireworks();
    });
  });
  $("#no").click(function (event) {
    modal("明人不说暗话！", A);
  });
});

function A() {
  modal("我好爱你！", B);
}

function B() {
  modal("i need u , every  moment", C);
}

function C() {
  modal("i need u a lot,everyday", D);
}

function D() {
  modal("i need u,in the good times", E);
}

function E() {
  modal("when i'm torn and rushed away", F);
}

function F() {
  modal("i need you", G);
}

function G() {
  modal("我比想象中爱你", H);
}

function H() {
  modal("我想是时候开始第一步了", I);
}

function I() {
  modal("镜镜，我们去插旗吧", J);
}

function J() {
  modal("拒绝无效", function () {
    fireworks();
  });
}

function fireworks() {
  $(".page_one").addClass("hide");
  initAnimate();
}

function modal(content, callback) {
  var tpl =
    '<div class="container">' +
    '<div class="mask"></div>' +
    '<div class="modal">' +
    "<p>" +
    content +
    "</p>" +
    '<button type="button" id="confirm" class="confirm">确定</button>' +
    "</div>" +
    "</div>";
  $("body").append(tpl);
  $(document).on("click", ".confirm", function () {
    $(".container").remove();
    callback();
  });
}
