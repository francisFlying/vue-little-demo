/**
 * 用calc里的add方法
 */
var calc = require('./calc.js') // calc:{add:func}
console.log(calc)

// 注册事件
var oBtn = document.getElementById('btn')
oBtn.onclick = function () {
  // 获取num1,num2
  var num1 = document.getElementById('num1').value - 0
  var num2 = document.getElementById('num2').value - 0
  console.log(typeof num1)

  // 调用 calc中的add
  var result = calc.add(num1, num2)
  document.getElementById('result').value = result
}
