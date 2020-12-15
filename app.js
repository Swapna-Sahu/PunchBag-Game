new Vue({
    el:'#vue-app',
    data:{
        punch:false,
        ended:false,
        health:100
    },
    methods: {
        addPunch: function () {
            this.health = this.health - 10;
            if(this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
             this.health =100;
             this.ended = false;
        }
    },
});