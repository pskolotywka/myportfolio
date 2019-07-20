import Vue from 'vue';



const btns = {
    template: "#reviews-btns"
}
const item = {
    template: "#reviews-item",
    props: {
        review: Object
    }
}
const list = {
    template: "#reviews-list",
    props: {
        reviews: Array
    },
    components: {
        item
    }
}
new Vue({
    el: "#reviews-container",
    template: "#reviews",
    components: {
        btns,
        list
    },
    data() {
        return {
            reviews: []
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = data;
    }
})
