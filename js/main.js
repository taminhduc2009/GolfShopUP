var swiper = new Swiper(".mySwiper", {
    pagination: {
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})


sr.reveal(`.product-item` ,{origin: 'left'})
sr.reveal(`.item` ,{origin: 'right'})
sr.reveal(`.HomeCarusel` ,{origin: 'bottom'})
sr.reveal(`.one` ,{origin: 'left'})
sr.reveal(`.two` ,{origin: 'bottom'})
sr.reveal(`.three` ,{origin: 'right'})
sr.reveal(`.signup` ,{origin: 'bottom'})
sr.reveal(`.footer` ,{origin: 'bottom'})
sr.reveal(`.email`, {origin: 'left',distance: '200px', duration: 2500,})
sr.reveal(`.pass`, {origin: 'right', distance: '200px', duration: 2500,})
sr.reveal(`.golfimg`)
sr.reveal(`.SpecialProduct, .header, .submit, .content, .toolbar `)
sr.reveal(`.new`)
sr.reveal(`.content, .toolbar`)



