const myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            // console.log('привет из примеси!')
        }
    },
}

export default myMixin