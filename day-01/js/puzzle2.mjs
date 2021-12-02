import fs from 'fs'

const lines = fs.readFileSync('input.txt', 'utf-8')
	.split('\n')
	.filter(x => Boolean(x))
	.map(x => parseInt(x))

let increaseCnt = 0

for (let i = 3; i < lines.length; i++) {
	const last = lines[i-1] + lines[i - 2] + lines[i - 3]
	const curr = lines[i] + lines[i - 1] + lines[i - 2]
	if (curr > last) {
		increaseCnt++
	}
}

//O
//while (lines.length) {
 // const batch = lines.splice(0,3)
 // const batchSum = batch.reduce((prev, acc) => {
 // 	return +prev + +acc
 // }, 0)
 // console.log(`${lines.length} ${batchSum} ${prevSum}`)
 // if (batchSum > prevSum) {
 // 	increaseCnt++
 // }
 // prevSum = batchSum

console.log(increaseCnt)

