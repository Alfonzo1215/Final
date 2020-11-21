new Vue({
  el: "#store",
  data: {
    items: [
      {
        name: "Fender California",
        instrument: "guitar",
        type: "string",
        price: "$429.99",
        brand: "Fender",
        color: "red",
        image:"https://www.pourlesmusiciens.com/medias/271/fender-newporter-player-auditorium-cw-epicea-acajou-wal-large-161219.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Fender American",
        instrument: "guitar",
        type: "string",
        price: "$1,899.99",
        brand: "Fender",
        color: "red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FoHG37UAZlXjuuFqmhV6c2CRO8sXD591NA&usqp=CAU",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Stage Custom",
        instrument: "Drums",
        type: "percussion",
        price: "$679.99",
        brand: "Yamaha",
        color: "green",
        image: "https://media.sweetwater.com/api/i/q-85__ha-0b81d5b8f9ca9240__hmac-6720497e633c03b50318948082802c326eebc694/images/items/1800/SCBIRCHSPHA-xlarge.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Keyboard",
        instrument: "piano",
        type: "Piano",
        price: "$2199.99",
        brand: "Yamaha",
        color: "green",
        image: "https://media.guitarcenter.com/is/image/MMGS7//PSR-SX900-61-Key-High-Level-Arranger-Keyboard/L66434000000000-00-1600x1600.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "S60",
        instrument: "Guitar",
        type: "string",
        price: "$249.99",
        brand: "Maton",
        color: "blue",
        image: "https://maton.com.au/images/made/assets/uploads/products/S60-P1310134_1_900_1350_s.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "S70",
        instrument: "Guitar",
        type: "string",
        price: "$179.99",
        brand: "Maton",
        color: "blue",
        image: "https://justmusic.net.au/wp-content/uploads/IMG_7590.jpg",
        hover: false,
        hasPopUp: false
      },
    ],
    showPopUp: false,
    popUpItem: {},
    cart: 0
  },

  methods: {
    addToCart(){
      this.cart += 1;
    },
    empty: function() {
      this.cart=0;
    },
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      window.scrollTo(0,0);
      this.popUpItem=item;
    }
  }
});