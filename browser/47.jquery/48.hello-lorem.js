$(function(){
    sayHelloLorem()
})

function sayHelloLorem(){
    const $p = $('<p>')
    $p.html(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis earum dolore harum, officia inventore delectus nihil. Velit at qui quis quo, aperiam voluptatem voluptatibus officiis cupiditate minus eligendi et enim.`)
    $('body').append($p)

    const $body = $('body')
    $body.html(`<p class="">Hello</p>`)
    

}