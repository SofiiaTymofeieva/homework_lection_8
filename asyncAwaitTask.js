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

async function checkResult(data){
  const result = await checkData(data);
  console.log(`Your number is ${result}`);
}

checkResult(4);
checkResult(5);
checkResult('test').catch(e => console.log(e));
checkResult('456').catch(e => console.log(e));

