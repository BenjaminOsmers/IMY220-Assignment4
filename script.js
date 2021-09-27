$(document).on('click', '.details > .btn', function () {
	let currVal = $(this).parent().children('span').text()
	let dataType = $(this).parent().data('type')
	let data = $(this).parent().children('b').text()

	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	if (dataType === 'date') {
		let date = currVal.split(' ')
		let month = date[1]
		let year = date[2]
		let day = date[0]
		month = `${months.indexOf(month) + 1}`

		if (month.length === 1) {
			month = `0${month}`
		}

		if (day.length === 1) {
			day = `0${day}`
		}

		currVal = `${year}-${month}-${day}`
	}

	$(this).parent().children('b').remove()
	$(this).parent().children('span').remove()

	$(this).parent().addClass('d-flex')

	$(this)
		.parent()
		.append($(`<div></div>`, { class: 'col col-8 p-0' }).append($(`<input/>`, { type: `${dataType}`, value: `${currVal}`, class: 'w-100' })))

	$(this)
		.parent()
		.append($(`<div></div>`, { class: 'col col-4 p-0' }).append($(`<button></button>`, { class: 'btn btn-dark pull-right', html: 'Update' })))

	$(this).remove()

	$(document).on('click', '.details > .col-4 > .btn', function () {
		let newVal = $(this).parent().parent().children('.col-8').children('input').val()

		if (dataType === 'date') {
			let val = newVal.split('-')

			let month = val[1] - 1
			let year = val[0]
			let day = val[2]

			if (month[0] === '0') {
				month = month[1]
			}

			month = months[month]

			newVal = `${day} ${month} ${year}`
		}

		$(this).parent().parent().removeClass('d-flex')
		$(this)
			.parent()
			.parent()
			.append($(`<b></b>`, { html: `${data} ` }))
		$(this)
			.parent()
			.parent()
			.append($(`<span></span>`, { html: `${newVal}` }))
		$(this)
			.parent()
			.parent()
			.append($(`<button></button>`, { class: 'btn btn-dark pull-right', html: 'Edit' }))
		$(this).parent().parent().children('div').remove()
	})
})
