// 변수 사칙연산 과제

//   let 나이 = 36;
//   const 출신지역 = 서울;

// let 예금액 = 50000;
// let 미래예금액 = 0;

// function 이자율계산() {
//   if (예금액 < 50000) {
//     미래예금액 = 예금액 * 1.15;
//     미래예금액 = 미래예금액 * 1.15;
//   } else {
//     미래예금액 = 예금액 * 1.2;
//     미래예금액 = 미래예금액 * 1.2;
//   }
// }

// 예금액 = 60000;
// 이자율계산();
// console.log(미래예금액);

// 사칙연산 과제

// 최초의 90 주문하면 첫번째에 60 주고 두번쨰에 40 줌

// let 첫주문 = 90;
// 첫주문 = 360;

// let 리필1 = 첫주문 * 0.667;
// let 리필2 = 리필1 * 0.667;

// let 총량 = 첫주문 + 리필1 + 리필2;

// console.log(총량);

// -----------------------------------

// 퀴즈

// 인풋에 1335가 아니라면 오답 얼럿 노출

const send = document.querySelector('#send-answer');
let btnNumber = 0;

send.addEventListener('click', function () {
  btnNumber++;
});
function quiz() {
  const answer = Number(document.querySelector('input:nth-child(2)').value);

  if (answer === 1335) {
    alert('정답!');
  } else if (btnNumber % 3 == 0 && btnNumber != 0) {
    alert('멍청아!');
  } else {
    alert('오답');
  }
}

send.addEventListener('click', quiz);

// 버튼을 3번 누르면
