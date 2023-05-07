const eventData = { name: 'New Years Eve', date: '1 Jan 2024' }
const countsEl = document.querySelectorAll('.count')
const formatTime = (time) => (time < 10 ? `0${time}` : time)

document.getElementById('eventName').innerHTML = eventData.name

function countdown() {
	const totalSeconds = (new Date(eventData.date) - new Date()) / 1000
	const { floor } = Math

	const countsData = [
		floor(totalSeconds / 3600 / 24),
		floor(totalSeconds / 3600) % 24,
		floor(totalSeconds / 60) % 60,
		floor(totalSeconds) % 60,
	]

	countsEl.forEach((el, i) => {
		const count = countsData[i]
		el.innerHTML = i === 0 ? count : formatTime(count)
	})
}

countdown()

setInterval(countdown, 1000)