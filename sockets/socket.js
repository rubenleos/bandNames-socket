const { io } = require('../index.js');
const Bands = require('../models/bands.js');
const Band = require('../models/band.js');
const bands = new Bands();
//agragamos una banda
bands.addBand (new Band('Rv'));
bands.addBand(new Band('CS'));
bands.addBand(new Band('MOB'));
bands.addBand(new Band ('metalica ')); 


console.log(bands); 
//mensajes de socket
io.on('connection', client => {
  console.log('Cliente conectado');

  client.emit('active-bands',bands.getBands());
     
     client.on('disconnect', () => { 
        console.log('cliente desconectado'); 
 });
 


  client.on('emitir-mensaje', ( payload ) => {
         console.log(payload);
        // io.emit('nuevo-mensaje', payload ); // emite a todos!
         client.broadcast.emit('nuevo-mensaje', payload ); // emite a todos menos el que lo emitió
     })


     client.on('vote-band',(payload)=>{
        
    bands.voteBand(payload.id);
    //io es todos los servidores 
   io.emit('active-bands',bands.getBands());

   })

   client.on('add-bands',(payload)=>{
        const newBand = new Band(payload.name) ;
    bands.addBand(newBand);
    //io es todos los servidores 
   io.emit('active-bands',bands.getBands());

   })

   client.on('delete-band',(payload)=>{
  
bands.deleteBand(payload.id);
//io es todos los servidores 
io.emit('active-bands',bands.getBands());

})

   
 




 
   });
 