
function dividir(){
    var nu1 = window.document.getElementById('n1')
    var nu2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1 = Number(nu1.value)
    var n2 = Number(nu2.value)
    var d = n1 / n2
    res.innerHTML = `${n1} / ${n2} = ${d}`
}
 function multiplicar(){
    var nu1 = window.document.getElementById('n1')
    var nu2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1 = Number(nu1.value)
    var n2 = Number(nu2.value)
    var m = n1*n2
    res.innerHTML = `${n1} x ${n2} = ${m}`
}
function subtrair(){
    var nu1 = window.document.getElementById('n1')
    var nu2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1 = Number(nu1.value)
    var n2 = Number(nu2.value)
    var sub = n1-n2
    res.innerHTML = `${n1} - ${n2} = ${sub}`
}
function somar(){
    var nu1 = window.document.getElementById('n1')
    var nu2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')
    var n1 = Number(nu1.value)
    var n2 = Number(nu2.value)
    var s = n1+n2
    res.innerHTML = `${n1} + ${n2} = ${s}`
    
}
