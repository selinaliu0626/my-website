const app = Vue.createApp({
    data() {
        return {
            like: 0,
        }
    },
    methods: {
        likeIt() {
            this.like +=1
        }
    }
})
