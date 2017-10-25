var login = "rostik12";
var password = "1111";

var ask_login = prompt("Введите ваш логин");

if (ask_login == login){
  var ask_password = prompt("Введите ваш пароль");
  if (ask_password == password){
    alert("Привет админ");
  }else{
    alert("Пароль не правильный");
  }
}else{
  alert("Такого админа не существует");
}
