new Vue({
  el:"#instrumentstore",
  data:{
    name:"",
    type:"",
    price:"",
    brand:"",
    selected:false,
  img:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
    mess:"",
    
    instrument:[
      {
        name: "Drums",
        type: "Percussion",
        price: "$1200",
        brand: "Maton", 
        color:"Blue",
        selected:false,
    img:"https://as1.ftcdn.net/jpg/00/72/89/64/500_F_72896471_9JRWeYR7cnA4U0kaGq4ZIqAyDUgiwxkv.jpg",
       
      },
      {
        name: "Guitar",
        type: "String",
        price: "$800",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://as2.ftcdn.net/jpg/02/26/34/61/500_F_226346128_8K9dVocrsb7e2AEuVa5C5Bpyp8nlFY1E.jpg"
      },
      {
        name: "Harp",
        type: "String",
        price: "$750",
        brand: "Yamaha",
        color:"green",
       selected:false, img:"https://as1.ftcdn.net/jpg/00/34/43/48/500_F_34434851_Hmy57sl5v1LUfNpZirtg99DYtZOefOBm.jpg"
      },
      {
        name: "Oboe",
        type: "Woodwind",
        price: "$600",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://as1.ftcdn.net/jpg/00/61/22/16/500_F_61221685_FMfL16QwbSjSuuQlxdghvCCwyw7pvgR1.jpg"
      },
      {
        name: "Cornet",
        type: "Brass",
        price: "$350",
        brand: "Maton",
       color:"Blue", 
        selected:false,
img:"https://as2.ftcdn.net/jpg/02/84/06/55/500_F_284065585_kR8V3dr4g5A0XlWVqzxBzYD24Yb2y2BY.jpg",
        
      },
      {
        name: "Grand Piano",
        type: "String",
        price: "$2300",
        brand: "Yamaha",
        color:"green",
        selected:false,
 img:"https://as2.ftcdn.net/jpg/02/04/35/69/500_F_204356902_MPYmlmnnmZumZrMglaR6Rv6zLa1mZtcl.jpg"
      }
    ],
    cart: []
  },
  methods:{
    popUp:function (x) {
      this.instrument[x].selected = !this.instrument[x].selected;
    },
     popUp2:function () {
     this.selected = !this.selected;
    },
    submit:function(item,x){
      // this.cart.push(this.instrument[x]);
      this.instrument[x].selected=false;
    this.instrument.splice(x,1);
     this.cart.push(item);
      
      return this.instrument
      
    },
    emptyCart:function(x){
     
      this.instrument= this.instrument.concat(this.cart); 
      this.cart=[];
     
    },
  
  newInstrument:function(){
    this.instrument.push({
      name:this.name,
      type:this.type,
      price:this.price,
      brand:this.brand,
      img:this.img,
      selected:false
    });this.selected = !this.selected;
  } 
},
  watch:{
    name:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    type:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    brand:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    price:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    }
      
    
    
  }
   
})