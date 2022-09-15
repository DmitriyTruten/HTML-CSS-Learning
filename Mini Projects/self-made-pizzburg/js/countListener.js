let count = 1

function countUp() {
  let counter = document.getElementById('counter')
  count += 1
  counter.value = count
}

function countDown() {
  let counter = document.getElementById('counter')
  if (counter.value > 1){
    count -= 1
    counter.value = count
  }}
