import Vue from 'vue';
import Flickity from 'vue-flickity';


const btns = {
    template: "#reviews-btns",
    props: {
        flickityRefs: {  //5 регестрируем данные в батонсах для дальнейшего использования
            type: Object,
        },
    },
    methods: {
        next() {
          this.flickityRefs.next();   //6 здесь же присвяиваем их для того что бы событие next в них нашло
        },
     
        previous() {
          this.flickityRefs.previous();
        }
      },
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
    data() {
        return {
            flickityOptions: {
            initialIndex: 2,
            prevNextButtons: false,
            contain: true,
            pageDots: false,
            wrapAround: true,
            cellAlign: 'left',
            }
        }
    },
    components: {  //1 регистрируем компонент фликти в листе, что бы могли его использовать
        item,
        Flickity
    },
    mounted() {
        this.$emit('loadRef', this.$refs.flickity)  //2 создаём "несуществующее" событие что бы им отправить нужные нам данные и словить их в руте
    }
    
}
new Vue({
    el: "#reviews-container",
    template: "#reviews",
    components: {   // передаём сюда элементы которые будут лежать в корневой обёртке
        btns,
        list
    },
    data() {
        return {         // 0 здесь создаём данные которыми манипулируем
            reviews: [],
            flickityRefs: {}  
        }
    },
    methods: {
        updatedRefs(payload) {     //4 обработчик события который ловит даннные для корня
            this.flickityRefs = payload;
            console.log(this.flickityRefs)
        }
    },
    created() {
        const data = require('../data/reviews.json'); // регистрируем данные в корне
        this.reviews = data;    // присваеваем данные в созданными нами массив в data()
    }
})
