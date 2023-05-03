/* This code is creating a new Vue application instance using the `createApp` method provided by the
Vue library. The instance has an empty `data` object and a `methods` object with a single method
called `onLogEvent`. This method logs a message to the console when it is called with an `event`
parameter. Finally, the `app` instance is mounted to an HTML element with the ID `contact`. */
const app = Vue.createApp({
  data() {
    return {
      X: 0,
      Y: 0,
      classTesting: "flex",
      products: [
        {
          name: "San pham A",
          price: 100,
          thumb: "./assets/1.jpg",
          isCart: false,
        },
        {
          name: "San pham B",
          price: 150.0,
          thumb: "./assets/2.png",
          isCart: false,
        },
        {
          name: "San pham C",
          price: 200.0,
          thumb: "./assets/1.jpg",
          isCart: false,
        },
        {
          name: "San pham D",
          price: 50.0,
          thumb: "./assets/2.png",
          isCart: true,
        },
      ],
    };
  },
  methods: {
    onLogEvent(event, newX, newY) {
      console.log("run  Event", event);
      this.X = newX;
      this.Y = newY;
    },
    onMouseMoveEvent(event) {
      console.log("running mousemove event", event);
      this.X = event.offsetX;
      this.Y = event.offsetY;
      s;
    },
    onToggleCart(event, product) {
      product.isCart = !product.isCart;
    },
  },
  computed: {
    productsComputed() {
      return this.products.filter((product) => product.price > 160);
    },
  },
});

app.mount("#contact");
