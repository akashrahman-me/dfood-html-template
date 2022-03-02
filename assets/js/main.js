$(document).ready(function() {
    $('[data-toggle=tooltip]').tooltip()

    // Fixed Navbar
    const mainNav = document.getElementsByClassName('main-nav')[0]
    if([...mainNav.classList].indexOf('active') >= 0 == false) {
        $(window).scroll(fixedNavbar)
        fixedNavbar()
        function fixedNavbar() {
            if (window.scrollY >= 10) {
                $('.main-nav').addClass("active")

                $('.navbar-bar').parents('li').addClass('d-lg-none')
                $('.navbar-bar').parents('li').removeClass('d-lg-block')

                if(document.body.clientWidth >= 992) {
                    $('.header-links').removeClass('d-lg-none')
                    $('.header-links').addClass('d-lg-flex')
                }
            } else {
                $('.main-nav').removeClass("active")
                $('.navbar-bar').parents('li').removeClass('d-lg-none')
                $('.navbar-bar').parents('li').addClass('d-lg-block')

                if(document.body.clientWidth >= 992) {
                    $('.header-links').addClass('d-lg-none')
                    $('.header-links').removeClass('d-lg-flex')
                }
            }
        }
    }

    $('.navbar-bar').click(function() {
        if(window.scrollY < 10) {
            window.scrollBy(0, 15)
        }
    })


    // log session iuput
    $('.input-style input').focus(function() {
       $('.input-style').removeClass('active')
       $(this).parents('.input-style').addClass('active')
    })
    $('.input-style input').blur(function() {
       $('.input-style').removeClass('active')
    })


    // Password visible system
    pwdVisibile('.pwd')
    pwdVisibile('.newpwd')
    pwdVisibile('.cpwd')

    function pwdVisibile(button) {
        let pwdEye = true
        $(button).click(function() {
            if(pwdEye) { // Password visible
                $(this).prev().attr('type', 'text')
                $(this).addClass('fa-eye')
                $(this).removeClass('fa-eye-slash')
                pwdEye = false
            } else { //Password hidden
                $(this).prev().attr('type', 'password')
                $(this).removeClass('fa-eye')
                $(this).addClass('fa-eye-slash')
                pwdEye = true
            }
            
        })
    }


    // cities-item focus 
    $('.cities-item').click(function() {
        $(this).siblings().removeClass('focus')
        $(this).addClass('focus')
    })
    $('.cities-item').mouseout(function() {
        $(this).removeClass('focus')
    })

    // Current Date
    const date = new Date()
    $('#currentYear').text(date.getFullYear())
    
    //Show Pexel
    const pxUpdate = () => {
        const docWidth = document.body.scrollWidth
        if(docWidth < 576) {
            $('.form-control-nsm').addClass('form-control')
            $('.btn-danger-nsm').addClass('btn btn-danger')
            $('.fr-btn').addClass('btn btn-danger w-100 mt-3')
            $('.fr-input').addClass('form-control')
        } else {
            $('.form-control-nsm').removeClass('form-control')
            $('.btn-danger-nsm').removeClass('btn btn-danger')
            $('.fr-btn').removeClass('btn btn-danger w-100 mt-3')
            $('.fr-input').removeClass('form-control')
        }

        // Footer food image
        if(docWidth < 576) {
            $('.footer-food').css('top', `-${docWidth / 16}%`)
        }


        // Make Responsive Height 
        responsiveHeight('restaurant-container', 3.392)
        responsiveHeight('cite-slider-img', 3.7)

        function responsiveHeight(className, width) {
            const elementWidther = document.getElementsByClassName(className)[0]
            if(elementWidther) {
                elementWidther.style.height = parseInt(elementWidther.clientWidth / 3.7) + 'px'
            }
        }
        

    }
    $(window).resize(pxUpdate)
    pxUpdate()


    // nearby-item
    $('.nearby-item').mouseenter(function() {
        $(this).addClass('shadow')
    })
    $('.nearby-item').mouseleave(function() {
        $(this).removeClass('shadow')
    })

    // Details Navbar
    $('#detailsNav a.nav-link').click(function() {
        setTimeout(function() {
            window.scrollBy(0, -100)
        }, 1000)
    })


    // Library
    try {
        // magnificPopup
        $('#howtoorder').magnificPopup({
            type: 'iframe',
            iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
            patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
        
            },
            srcAction: 'iframe_src'
            }
        });
    } catch(err) {
        console.warn(err)
    }
})