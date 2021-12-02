import readline from 'readline'

const rl = readline.createInterface({
	
	input: process.stdin,
	output: null,
	terminal: true
})

let depthIncreases = 0
let lastDepth = 0
let idx = 0

rl.on('line', (line) => {
	if (idx > 0) {
		if (+line > lastDepth) {
			depthIncreases++
		}
		lastDepth = +line
	}
	idx++
})

rl.on('close', () => {
	console.log(depthIncreases)
})

