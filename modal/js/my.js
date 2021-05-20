// console.log($(document));
// document.getElementById('hOne').innerHTML = "Досвиданье Мир!";
//
// $('#hOne').html('Жизнь продолжается.')
// $('h1').html('Hello World') //    Выборка по Тегу

// console.log($('#hThree')) //    Выборка по id
// console.log($('.h-one, #hThree'))
// console.log($("input[class~='class2']"))

// $('div').attr('style', 'width: 350px; height: 150px; background: gold; padding: 15px; margin: 25px 25px 25px 50px')
// $('input').prop('disabled', true)
// console.log($('input').prop('disabled', true))

// $('input').each((index, item) => {
//   $(item).val(index)                 //Индексайпя импутов
//   console.log($(item). val)
// })



// $('#btnText').on('click.event1', (event) => {
//   // $('p').hide()
//   $('p').fadeOut('slow')
// })

// $('#btn2').on('click.event2', (event) => {
//   // $('p').show()
//   $('p').fadeIn('slow')
// })



// $('#btn2').on('click', () => {
//   // $('h1').html('Весна на заречной улице 2')
//   // $('p').html('Не истово матерясь и размахивая сломанной метлой, на тратуар из подворотни выбегает дворник ')
// $('#btn1').attr('style', 'width: 200px; padding: 20px; background: rgba(34, 180, 100, 1); color: #fff')
//   $('#btn1').trigger('click.event1')
// })

// console.log($(document))








$('#btnEnterOne').on('click', (event) =>{
	$('.pOne').fadeIn('slow')
	$('.btn-exit-one').fadeIn('slow')
})

$('#btnExitOne').on('click', (event) =>{
	$('.pOne').fadeOut('slow')
	$('.btn-exit-one').fadeIn('slow')
})

$('#btnEnterModal').on('click', (event) =>{
	$('#modal').fadeIn('slow')
})

$('#btnExitModal').on('click', (event) =>{
	$('#modal').fadeOut('slow')
})