const eventData = { name: 'New Years Eve', date: '1 Jan 2024' }

Array('Days', 'Hours', 'Mins', 'Seconds').forEach(type => {
	document.querySelector('.container').innerHTML += `
    <div class="countdown">
			<p class="count">0</p>
			<span class="count-type">${type}</span>
		</div>
  `
})

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

	document.querySelectorAll('.count').forEach((el, i) => {
		const count = countsData[i]
		el.innerHTML = i === 0 ? count : count < 10 ? `0${count}` : count
	})
}

countdown()

setInterval(countdown, 1000)