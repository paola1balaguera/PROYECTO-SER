const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'servicios',
    user: 'pepe',
    password: ''
});

conexion.connect((error) => {
    if(error){
        throw error;

    }

    else{
        console.log('conexion establecida');
    }
}) 
