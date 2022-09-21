<template>
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="">
                  <span class="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form @submit.prevent="createuser()" class="row g-3 needs-validation" novalidate >
                    
                    <div class="col-12">
                      <label for="yourName" class="form-label">Your Name</label>
                        <input v-model="newNom" type="text" name="name" class="form-control" id="yourName" required="">
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Your Email</label>
                      <input v-model="newEmail" type="email" name="email" class="form-control" id="yourEmail" required="">
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input v-model="newUserName" type="text" name="username" class="form-control" id="yourUsername" required="">
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input v-model="newPwd" type="password" name="password" class="form-control" id="yourPassword" required="">
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password Confirmation</label>
                      <input v-model="newConfirmpwd" type="password" name="password" class="form-control" id="ConfirmyourPassword" required="">
                      <div class="invalid-feedback">Please confirm your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input v-model="newState" class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required="">
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <!-- error div -->
                    <div v-show="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                      <i class="bi bi-exclamation-octagon me-1"></i>
                        {{ this.erroMsg }}
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                      <div class="col-12">
                         <button  class="btn btn-primary w-100" type="submit">Create Account</button>       
                      </div>
                   
                    <!-- :disabled="!newNom"  -->
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <router-link to="/">Log in</router-link></p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
  import  {ref,onMounted}  from 'vue'
  import { collection,doc } from '@firebase/firestore'
  import { db,auth  } from '@/firebase/index'
  // import { } from  '@/firebase/index'
  import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
  // import {v4 as uuidv4} from 'uuid'
  import  FonctionGenrique  from '@/firebase/fonction'
  // import router from '@/router'
  // import "firebase/auth"

const user = auth.currentUser
  // const UserCollectionRefs = collection(db,"utilisateurs")
  
  // const  newNom= ref('')
  // const  newEmail= ref('')
  // const  newUserName= ref("")
  // const  newPwd= ref("")
  // const  newConfirmpwd=ref("")
  // const  newState= ref("")

  export default {
    
    data(){ 
        return {
            newNom:"",
            newEmail:"",
            newPwd:"",
            newState:false,
            newUserName:"",
            newConfirmpwd:"",
            error:null,
            erroMsg:""
        }
      },
    //   props:{
    //   newConfirmpwd:'',
    //   newNom:"",
    //   newEmail:"",
    //   newPwd:"",
    //   newState:"",
    //   newUserName:"",
    // },
      methods:{
        logOut(){

        },
        createuser(){  
             if(
              this.newNom !== "" &&
              this.newEmail !== "" &&
              this.newPwd !== "" &&
              this.newState !== "" &&
              this.newUserName !== "" &&
              this.newConfirmpwd !== "" 
             ){
              this.error = false
              this.erroMsg = ""
              const createUser = createUserWithEmailAndPassword (auth,this.newEmail, this.newPwd).then(cred=>{
                const result = createUser;
                const docREf = doc(db,'utilisateurs',cred.user.uid)
                var donner={
                  Confirmpwd:this.newConfirmpwd,
                  nom:this.newNom,
                  Email:this.newEmail,
                  pwd:this.newPwd,
                  state:this.newState,
                  userName:this.newUserName
                };
                FonctionGenrique.create(docREf,donner)
                this.$router.push({name:"dasboard"})
                return;
              })
              this.error=true
              this.erroMsg = "veuillez remplire tous les champs"
              return;
             }
        },
        
      }
  }
</script>