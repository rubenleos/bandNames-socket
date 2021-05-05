const Band = require("./band");


class Bands{

    constructor(){
this.bands =[];

    }

    addBand(band = new Bands()){

   this.bands.push(band);

    }

    getBands(){
return this.bands;

    }

    deleteBand( id = ''){

    this.bands = this.bands.filter(band => band.id !== id);
  
  
    }
  
   
    voteBand(id = ''){
        this.bands.id ===this.bands.map(band =>{
    if(band.id === id) {

    band.votes++;
    return band;
    }
    else {

       return band ; 
         
    
     }});
    }
   }

module.exports =Bands ; 