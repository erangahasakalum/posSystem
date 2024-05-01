$("#dashboard-form").css({
    display:'none'
})

$("#customer-form").css({
    display: 'none'
})

$("#item-form").css({
    display:'none'
})

$("#order-form").css({
    display:'none'
})

$("#header").css({
    display:'none'
})

$("#signup-form").css({
    display:'none'
})



$('#sign-in-btn').on('click', () => {
    $("#header").css({
        display:'block'
    })
    $("#sign-up-form").css({
        display:'none'
    })
})


