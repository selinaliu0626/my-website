app.component('display', {
  template: 
  /*html*/
  `<div class="display">
    <div class="container">
      <div class="show-image">
        <img v-bind:src="image">
      </div>
   <div>
     <p style="text-align: center; margin-left: 40%"> Hover to see more pictures</p>
   </div>
      <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">


        <i class="fa-solid fa-angles-right">{{variant.id}}</i>
      </div>
      <div class="info">
        <h1>{{ title }}</h1>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        
       
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        title:"Becoming Jane",
        selectedVariant: 0,
        details: ['Anne Hathway','James Walters','James Cromvell','Maggie Smith'],
        variants: [
          { id: 1, color: 'lightblue', image: 'images/becomingJane.png' },
          { id: 2, color: '#F1F0C0', image: 'images/bj2.png' },
        ],
        reviews: []
    }
  },
  methods: {

      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {

      image() {
          return this.variants[this.selectedVariant].image
      },
  }
})
