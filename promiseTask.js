function checkData(data){
  return new Promise((resolve, reject) => {
    if(typeof(data) === 'number'){
      if(data % 2 == 0){
        return setTimeout(() => resolve('even'), 2000);
      } else {
        return setTimeout(() => resolve('odd'), 1000);
      }
    } else {
      return reject('error');
    }
  })
}

function checkResult(result){
    console.log(`Your number is ${result}`);
}

checkData(5).then(checkResult,  e => console.log(e));
checkData(4).then(checkResult,  e => console.log(e));
checkData(111).then(checkResult,  e => console.log(e));
checkData(222).then(checkResult,  e => console.log(e));
checkData('test').then(checkResult, e => console.log(e));
checkData(true).then(checkResult, e => console.log(e));