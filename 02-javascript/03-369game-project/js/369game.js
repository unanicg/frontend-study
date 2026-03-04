// 3의 배수에서 console.log('박수')가 작동해야함
// 만약 3의 배수가 아닐경우 '통과' 출력
// 인풋박스 안에 써진 숫자가 3의 배수가 아닌경우 위 내용을 실행

// var submit = document.querySelector('button');

// submit.addEventListener('click', function () {
//   var num = document.querySelector('input').value;

//   if (num % 9 == 0) {
//     alert('박수x2');
//   } else if (num % 3 === 0) {
//     alert('박수');
//   } else {
//     alert('통과');
//   }
// });

// 인풋박스에 있는 숫자가 3의 배수일때 박수 9의 배수일땐 박수 두번 그게 아니라면 통과

var firstSubmit = document.querySelector('button');

firstSubmit.addEventListener('click', function () {
  var score1 = document.querySelector('input:nth-child(1)').value;
  var score2 = document.querySelector('input:nth-child(2)').value;
  var num1 = Number(score1);
  var num2 = Number(score2);
  if (num1 > 100 || num2 > 100 || num1 < 0 || num2 < 0) {
    alert('올바른 숫자를 입력하세요');
  } else if (num1 + num2 >= 120) {
    alert('합격');
  } else if (num1 < 40 || num2 < 40) {
    alert('불합격');
  } else alert('불합격');
});
