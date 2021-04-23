const { io } = require('../index.js');

//mensajes de socket
io.on('connection', client => {
    console.log('cliente conectado');
     
     client.on('disconnect', () => { console.log('cliendte desconectado'); 
 });
 client.on('mensaje',(payload)=>{console.log('Mensaje',payload);
 
 io.emit('mensaje',{admin:'nuevo mensaje'});
 
 });
 
   });
 