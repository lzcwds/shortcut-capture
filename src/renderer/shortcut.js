/**
 * Created by dy on 2019/1/14.
 *
 */
const {desktopCapturer, screen, shell} = require('electron')
const fs = require('fs')
const os = require('os')
const path = require('path')
const thumbSize = determineScreenShotSize()
let options = { types: ['screen'], thumbnailSize: thumbSize }

desktopCapturer.getSources(options, (error, sources) => {
	if (error) return console.log(error)

	sources.forEach((source) => {
		console.log(source)
		// if (source.name === 'Entire screen' || source.name === 'Screen 1') {
			let screenshotPath = path.join(os.tmpdir(), 'screenshot.png')

			fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
				if (error) return console.log(error)
				let message = `截图保存到: ${screenshotPath}`
				console.log(message)
			})
		// }
	})
})

function determineScreenShotSize () {
	const screenSize = screen.getPrimaryDisplay().workAreaSize
	const maxDimension = Math.max(screenSize.width, screenSize.height)
	return {
		width: maxDimension * window.devicePixelRatio,
		height: maxDimension * window.devicePixelRatio
	}
}
