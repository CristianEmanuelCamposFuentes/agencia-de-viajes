const guardarTestimonial = (req, res) => {
    
    // Validar

    const {nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }
    
    if(errores.length>0){
        // Mostrar la vista con errores
        // Render toma dos parametros, la vista y la informacion que quieres enviar
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        
    }
}

export {
    guardarTestimonial
}