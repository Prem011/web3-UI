const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#customer-review-trigger",
        scroller:"#container",
        // markers:true,
        scrub: true,
        start: "top 50%",
        end: "top -100%",

    }

});

tl.to("#customer-review-flex",{
    // transform : "translateX(-60%)",
    duration: 1,
    // pin:true
    
},"ani")

tl.to("#review-btm-in",{
    x:740,
    duration: 10,
    // pin:true
},"ani")