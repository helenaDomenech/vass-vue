/* eslint-disable */
export default {
    name: 'login',
    data() {
        return {
            autenticado: false,
            input: {
                user: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    localStorage.setItem('user', JSON.stringify(this.input.username));
                    this.$router.replace({ name: "registro" });
                } else {
                    console.log("El nombre de usuario y/o contraseña es(son) incorrecto(s)");
                }
            } else {
                console.log("Es necesario ingresar el nombre de usuario y la contraseña");
            }
        }
    }
}
