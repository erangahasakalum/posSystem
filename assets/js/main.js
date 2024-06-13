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
$("#dashboard-form").css({
    display:'none'
})

$('#forget-password-form').css({
    display:'none'
})

$('#sign-up-form').css({
    display:'none'
})


$('#login-btn').on('click',()=>{
    $("#header").css({
        display:'block'
    })
    $("#dashboard-form").css({
        display:'block'
    })
    $("#login-form").css({
        display:'none'
    })
})

$('#signUp-btn').on('click',()=>{
    $('#login-form').css({
        display:'none'
    })
    $('#sign-up-form').css({
        display:'block'
    })
})


$('#forget-password-btn').on('click',()=>{
    $('#forget-password-form').css({
        display:'block'
    })

    $('#login-form').css({
        display:'none'
    })

})

$('#sign-in-btn').on('click',()=>{
    $('#sign-up-form').css({
        display:'none'
    })

    $('#login-form').css({
        display:'block'
    })

})

$('#dashboard-click').on('click', () => {
    console.log("click")
    $("#dashboard-form").css({
        display:'block'
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

})

$("#customer-click").on('click',()=>{
    console.log("clicked")
    $("#customer-form").css({
        display:'block'
    })

    $("#dashboard-form").css({
        display:'none'
    })

    $("#item-form").css({
        display:'none'
    })

    $("#order-form").css({
        display:'none'
    })
})

$("#item-click").on('click',()=>{
    console.log("clicked")
    $("#item-form").css({
        display:'block'
    })
    $("#customer-form").css({
        display:'none'
    })

    $("#dashboard-form").css({
        display:'none'
    })

    $("#order-form").css({
        display:'none'
    })
})

$("#order-click").on('click',()=>{
    console.log("clicked")
    $("#order-form").css({
        display:'block'
    })
    $("#item-form").css({
        display:'none'
    })
    $("#customer-form").css({
        display:'none'
    })

    $("#dashboard-form").css({
        display:'none'
    })

})
/*
$('#login-btn').on('click',()=>{
    $('#login-form').css({
        display:'none'
    })
    $("#header").css({
        display:'block'
    })
    $("#dashboard-form").css({
        display:'block'
    })

})

$('#sign-btn').on('click',()=>{
    $('#sign-up-form').css({
        display:'block'
    })

})

$('#login-btn').on('click',()=>{
    $('#login-form').css({
        display:'none'
    })
    $("#header").css({
        display:'block'
    })
    $("#dashboard-form").css({
        display:'block'
    })

})

$('#dashboard-click').on('click', () => {
    console.log("click")
    $("#dashboard-form").css({
        display:'block'
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

})

$("#customer-click").on('click',()=>{
    console.log("clicked")
    $("#customer-form").css({
        display:'block'
    })

    $("#dashboard-form").css({
        display:'none'
    })

    $("#item-form").css({
        display:'none'
    })

    $("#order-form").css({
        display:'none'
    })
})

$("#item-click").on('click',()=>{
    console.log("clicked")
    $("#item-form").css({
        display:'block'
    })
    $("#customer-form").css({
        display:'none'
    })

    $("#dashboard-form").css({
        display:'none'
    })

    $("#order-form").css({
        display:'none'
    })
})

$("#order-click").on('click',()=>{
    console.log("clicked")
    $("#order-form").css({
        display:'block'
    })
    $("#item-form").css({
        display:'none'
    })
    $("#customer-form").css({
        display:'none'
    })

    $("#dashboard-form").css({
        display:'none'
    })

})

$("#log-out-click").on('click',()=>{
    console.log("clicked")
    $("#sign-in-form").css({
        display:'block'
    })

    $("#order-form").css({
        display:'none'
    })
    $("#item-form").css({
        display:'none'
    })
    $("#customer-form").css({
        display:'none'
    })

    $("#dashboard-form").css({
        display:'none'
    })

    $("#header").css({
        display:'none'
    })

})



*/
