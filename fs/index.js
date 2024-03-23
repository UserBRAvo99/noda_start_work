const fs = require('fs').promises

const operationWithFile = async () => {
	try {
		const data = (await fs.readFile('./text.txt')).toString()
		console.log(data)
		const length = data.split(' ').length
		console.log(length)
		await fs.appendFile('./text2.txt', '\nFS is own module')
		await fs.rename('./text2.txt', './updatedText.txt')
		setTimeout(async () => {
			await fs.unlink('./updatedText.txt')
		}, 3000)
	} catch (error) {
		console.log('Error')
	}
}

// operationWithFile()
const folder_name = 'new_folder'
fs.mkdir(__dirname + '/' + folder_name)
setTimeout(() => {
	fs.rmdir(__dirname + '/' + folder_name)
}, 1000)
