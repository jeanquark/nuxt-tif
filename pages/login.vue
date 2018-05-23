<template>

<div class="container-fluid">
		
			<!-- The Modal Pseudo -->
			<div class="modalBox">
			  <form class="modal-content" action="/action_page.php">
				<div class="container">
				  <h1>Se connecter</h1>
				  <p class="modalInscription">Va vite encourager tes équipes favorites !</p>
				  <hr>
				  <label for="email"><b>Email</b></label>
				  <input type="text" placeholder="Enter Email" name="email" required>

				  <label for="psw"><b>Password</b></label>
				  <input type="password" placeholder="Enter Password" name="psw" required>
				  
				  <label>
					<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Se souvenir de moi
				  </label>

				  <div class="row button-section">
				  <div class="col-twelve">
					<a href="index2.html" type="button" class="button stroke smoothscroll">Non, je ne veux pas !</a>
					<a href="vue/load.html" type="submit" class="button button-primary">Go Go Go, c'est parti !</a>
				  </div>
				  </div>

				  <div class="row button-section">
				  <div class="col-twelve">
					<a href="vue/load.html" type="submit" class="button btn-facebook"><i class="fa fa-facebook"></i> Connecte-toi avec FB</a>
					<a href="vue/load.html" type="submit" class="button btn-twitter"><i class="fa fa-google"></i> Connecte-toi avec G+</a>
				  </div>
				  </div>
				  
				</div>
			  </form>
			</div>   
			<!-- End Modal Pseudo -->
						
		</div>


    <div class="container-fluid">
        <!-- The Modal Player -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header text-center">
                        <span class="modal-title">Se connecter</span>
                        <nuxt-link to="/">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                    
                    </div>
                    <!-- Modal body -->
                    <div id="modalTitle" class="modal-body">

                        <br /><br />
                        <div class="col-md-6 offset-md-6 text-center">
                        <div v-if="error" class="text-center" style="color: red;">{{ $t(error.code) }}</div><br />

                        <form>
                            <!-- <div class="group">      
                                <input type="text" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div> -->
                                
                            <div class="group">      
                                <input type="text" v-model="email" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>

                            <div class="group">      
                                <input type="password" v-model="password" required>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password</label>
                            </div>

                            <!-- <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>   -->
                            <button type="submit" class="btn btn-primary" style="" :disabled="loading" :loading="loading" @click.prevent="signUserIn"> Login <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>&nbsp;&nbsp;
                            <br /><br />
                        </form>
                        </div>
                    </div><!-- /.modal-body -->
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/" type="button" class="btn btn-danger" data-dismiss="modal">Fermer</nuxt-link>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
        head: {
            script: [
                // { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
                // { src: 'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js' },
                // { src: 'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js' },
                // { src: 'https://use.edgefonts.net/bangers.js' },
                // { src: '/js/material.min.js' },
            ],
            link: [
                // { rel: 'stylesheet', href: '/css/base.css' },
                // { rel: 'stylesheet', href: '/css/main.css' },
                // { rel: 'stylesheet', href: '/css/vendor.css' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open%20Sans' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
                // { rel: 'stylesheet', href: 'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css' },
                // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
                // { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
                // { rel: 'stylesheet', href: '/css/styles.css' },
                // { rel: 'stylesheet', href: '/css/material.min.css' },
            ]
        },
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            loading () {
                return this.$store.getters['loading']
            },
            error () {
                return this.$store.getters['error']
            }
        },
        methods: {
            async signUserIn () {
                console.log('signUserIn')
                await this.$store.dispatch('users/signUserIn', {
                    email: this.email,
                    password: this.password
                })
                this.$router.replace('/home')
            },
        }
    }
</script>

<style scoped>
.container-fluid {
    /*font-family: "bangers", Helvetica, sans-serif;*/
}
.group { 
    position:relative; 
    margin-bottom:45px; 
}
input {
    background-color: whitesmoke;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;
}
input:focus { 
    outline:none; 
}

/* LABEL ======================================= */
label {
    font-family: "bangers", Helvetica, sans-serif;
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label {
    top:-20px;
    font-size:14px;
    color:#007bff;
    /*color:#5264AE;*/
}

/* BOTTOM BARS ================================= */
.bar { 
    position:relative; 
    display:block; 
    width:300px; 
    /*width: 100%;*/
}
.bar:before, .bar:after {
    content:'';
    height:2px; 
    width:0;
    bottom:0px; 
    position:absolute;
    background:#007bff; 
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
}
.bar:before {
    left:50%;
}
.bar:after {
    right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
    width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
        from { background:#007bff; }
    to    { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
        from { background:#007bff; }
    to    { width:0; background:transparent; }
}
@keyframes inputHighlighter {
        from { background:#007bff; }
    to    { width:0; background:transparent; }
}
</style>
