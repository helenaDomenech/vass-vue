export default {
    name: 'ec-nav',
    data() {
        return {
            routes: this.$router.options.routes
        }
    },
    computed : {
        setRoutes() {
            return this.routes.filter(route => route.name !== 'registro' && route.name !== 'recordar')
        }
    }
}