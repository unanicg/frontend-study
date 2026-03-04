function toggleAlert() {
  document.querySelector('.modal-overlay').classList.add('show');
  document.querySelector('.modal-container').classList.add('show');
}

function closeModal() {
  document.querySelector('.modal-overlay').classList.remove('show');
  document.querySelector('.modal-container').classList.remove('show');
}

document.querySelectorAll('.btn-open')[0].addEventListener('click', toggleAlert);
document.querySelector('.icon-wrap').addEventListener('click', closeModal);

document.querySelector('.btn-login').addEventListener('click', function () {
  var emailInput = document.querySelector('.login-input input');
  var email = emailInput.value;
  var passwardInput = document.querySelector('.pw');
  var passward = passwardInput.value;

  if (email == '') {
    emailInput.style.border = '2px solid red';
    emailInput.placeholder = '이메일을 입력하세요';
    emailInput.style.color = 'red';
    emailInput.style.padding = '12px';
    return false;
  } else if (passward == '') {
    passwardInput.style.border = '2px solid red';
    passwardInput.placeholder = '비밀번호를 입력하세요';
    passwardInput.style.color = 'red';
    passwardInput.style.padding = '12px';
    return false;
  } else if (passward.length < 6) {
    passwardInput.style.border = '2px solid red';
    passwardInput.placeholder = '6자리 이상 입력하세요';
    passwardInput.style.color = 'red';
    passwardInput.style.padding = '12px';
    return false;
  } else {
    passwardInput.style.border = '2px solid green';
    passwardInput.style.color = 'green';
    passwardInput.style.padding = '12px';
    alert('로그인 성공!');
    closeModal();
  }
  // else {
  //   emailInput.style.border = '2px solid green';
  //   emailInput.style.color = 'green';
  //   emailInput.style.padding = '12px';
  //   alert('로그인 성공!');
  //   closeModal();
  // }
});

document.querySelector('.login-input input').addEventListener('focus', function () {
  emailInput.style.border = '1px solid #888';
  emailInput.style.color = '#888';
  emailInput.placeholder = 'Enter Your Email';
  emailInput.style.padding = '13px';
});

// 만약에 이메일을 입력이 참이고 비밀번호를 입력안하면 로그인 비밀번호 입력하라고 노출
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
