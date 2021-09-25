$(document).on('click', '.details > .btn', function () {
	let currVal = $(this).parent().children('span').text()
	let dataType = $(this).parent().data('type')
	let data = $(this).parent().children('b').text()

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
