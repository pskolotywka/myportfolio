import Vue from 'vue';


const btns = {
    template: "#works-btns",
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        }
    }
}
const thumbs = {
    template: "#works-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
}



const display = {
    template: "#works-display",
    components: {
        btns, thumbs
    },
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    computed: {
        reversedWorks() {
            return [...this.works].reverse()
        }
    }
}

const tags = {
    template: "#works-tags",
    props: {
        tags: Array
    }
}

const info = {
    template: "#works-info",
    components: {
        tags
    },
    props: {
        currentWork: Object,
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ')
        }
    }
}


new Vue({
    el: '#slider-container',
    template: '#works',
    components: {
        display, 
        info
    },
    methods: {
        makeArrWithRequiredImage(data) {
            return data.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;

                return item
            })
        },
        handleSlide(direction) {
            switch(direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        }
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            const worksLengthFromZero = this.works.length - 1;
            if (value < 0) this.currentIndex = worksLengthFromZero;
            if (value > worksLengthFromZero) this.currentIndex = 0;
        }
    },
    created() {
        const data = require('../data/works.json')
        this.works =  this.makeArrWithRequiredImage(data);
    }
})