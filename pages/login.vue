<template>
    <div class="container-fluid">
        <!-- The Modal Player -->
        <div id="modalBox">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <span class="modal-title">S'inscrire</span>
                        <nuxt-link to="/home">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text"><i class="fa fa-arrow-circle-left"></i></span>
                            </button>
                        </nuxt-link>                    
                    </div>
                    <!-- Modal body -->
                    <div id="modalTitle" class="modal-body">

<br /><br />
                        <form>
<div class="group">      
  <input type="text" required>
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Name</label>
</div>
  
<div class="group">      
  <input type="text" required>
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Email</label>
</div>

<div class="group">      
  <input type="password" required>
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Password</label>
</div>

<div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

                            
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <nuxt-link to="/home" type="button" class="btn btn-danger" data-dismiss="modal">Fermer</nuxt-link>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /#modalBox -->
    </div><!-- /.container-fluid -->
</template>

<script>
    export default {
        layout: 'layoutFront',
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
        }
    }
</script>

<style scoped>
.group { 
  position:relative; 
  margin-bottom:45px; 
}
input {
  font-size:18px;
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
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar { 
    position:relative; 
    display:block; 
    width:300px; 
}
.bar:before, .bar:after {
  content:'';
  height:2px; 
  width:0;
  bottom:0px; 
  position:absolute;
  background:#5264AE; 
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
    from { background:#5264AE; }
  to    { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
    from { background:#5264AE; }
  to    { width:0; background:transparent; }
}
@keyframes inputHighlighter {
    from { background:#5264AE; }
  to    { width:0; background:transparent; }
}
</style>
