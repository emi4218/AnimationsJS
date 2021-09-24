window.addEventListener('load', () => {

    let a = document.getElementById('contentDropDown')
    let s = a.style
    let b = "borderStyle"
    let t = a.offsetHeight
    s.height = "0px"
    s[b] = "none"
    console.log(a);
    // en JS
    document.getElementById('btnDropDown').addEventListener('click', event => {
        if (s.height == "0px") {
            s.height = t + "px"
            s[b] = "solid"
        }
        else {
            s.height = "0px"
            setTimeout(() => {
                s[b] = "none"
            }, 500)
        }
    })

    // en Jquery
    // $('#btnDropDown').click(() => {
    //     $('#contentDropDown').slideToggle()
    // })
});