const number = '1 2 3 4 5'
const number2 = "1 2 -3 4 5"
const number3 =  "1 9 3 4 -5"

function highAndLow(numbers){
  const arrayNum = numbers.split('')
  const newArr = []
  for(const arr of arrayNum){
      if(arr !== " "){
        newArr.push(arr)
      }
    }
  const min = Math.min(...newArr)
  const max = Math.max(...newArr)
console.log(max,min)
}

highAndLow(number)
highAndLow(number2)
highAndLow(number3)