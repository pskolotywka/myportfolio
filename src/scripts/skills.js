import Vue from 'vue';

const skill = {
    template: '#skills-item', 
    props: {
        skillName: String,
        skillPercent: Number
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs['circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skillPercent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColoredCircle()
    }
}

const row = {
    template: '#skills-row',
    components: {
        skill
    },
    props: {
        skill: Object
    }
}



new Vue({
    el: '#skills-container',
    template: '#skills-list',
    components: {
        row
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        const data = require('../data/skills.json');
        this.skills = data;
    },
    mounted() {
        
    }
})