import fs from 'fs'
import { argv0 } from 'process'

const commands = fs.readFileSync('../input.txt', 'utf-8')
  .split('\n')
  .filter(l => Boolean(l))
  .map(l => {
		const arr = l.split(' ')
		return {
			dir: arr[0],
			amount: parseInt(arr[1])
		}
	})

const result = commands.reduce((acc, c) => {
	console.log(`${JSON.stringify(c)} ${JSON.stringify(acc)}`)
	if (c.dir === 'forward') {
		acc.horiz += c.amount
	} else if (c.dir === 'down') {
		acc.depth += c.amount
	} else if (c.dir === 'up') {
		acc.depth -= c.amount
	}
	console.log(`  ${JSON.stringify(acc)}`)
	return acc
}, { horiz: 0, depth: 0 })

console.log(result.depth * result.horiz)

// part 2

const result2 = commands.reduce((acc, c) => {
	console.log(`${JSON.stringify(c)} ${JSON.stringify(acc)}`)
	if (c.dir === 'forward') {
		acc.horiz += c.amount
		acc.depth += acc.aim * c.amount
	} else if (c.dir === 'down') {
		acc.aim += c.amount
	} else if (c.dir === 'up') {
		acc.aim -= c.amount
	}
	console.log(result.depth * result.horiz)
	return acc
}, { aim: 0, horiz: 0, depth: 0 })
console.log(result2.depth * result2.horiz)
