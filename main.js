canvas= new fabric.Canvas("lienzo")
x= 500
y= 250
ancho= 30
alto= 30
steve= ""
bloque= ""
function botones(e) {
    var boton= e.keyCode
    console.log(boton)
    if(boton=="87"){
        arriba()
    }
    if(boton=="65"){
        izquierda()
    }
    if(boton=="83"){
        abajo()
    }
    if(boton=="68"){
        derecha()
    }
    if(boton=="81"){
        nuevo_bloque("Arena.jpg")
    }
    if(boton=="69"){
        nuevo_bloque("diamante.jpg")
    }
    if(boton=="72"){
        nuevo_bloque("hoja.webp")
    }
    if(boton=="76"){
        nuevo_bloque("ladrillo.jpg")
    }
    if(boton=="86"){
        nuevo_bloque("lava.jpg")
    }
    if(boton=="77"){
        nuevo_bloque("madera.png")
    }
    if(boton=="90"){
        nuevo_bloque("nieve.png")
    }
    if(boton=="80"){
        nuevo_bloque("piedra.jpg")
    }
    if(boton=="84"){
        nuevo_bloque("tnt.jpg")
    }
    if(boton=="70"){
        nuevo_bloque("Tronco.jpg")
    }
}
window.addEventListener("keydown", botones)