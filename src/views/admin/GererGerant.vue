<template>
    <bases>
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">Default Tabs Justified</h5>

              <!-- Default Tabs -->
              <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                <li class="nav-item flex-fill" role="presentation">
                  <button class="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-justified" type="button" role="tab" aria-controls="home" aria-selected="false" tabindex="-1">
                    <i class="bi bi-list"></i> Liste
                </button>
                </li>
                <li class="nav-item flex-fill" role="presentation">
                  <button class="nav-link w-100 " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-justified" type="button" role="tab" aria-controls="profile" aria-selected="true">
                    <i class="bi bi-person-plus-fill"></i> Ajouter
                </button>
                </li>
                <li class="nav-item flex-fill" role="presentation">
                  <button class="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">
                    <i class="bi bi-person-dash-fill"></i> Retirer
                </button>
                </li>
              </ul>
              <div class="tab-content pt-2" id="myTabjustifiedContent">
                <div class="tab-pane fade  active show" id="home-justified" role="tabpanel" aria-labelledby="home-tab">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Table with hoverable rows</h5>

                        <!-- Table with hoverable rows -->
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Profile Picture</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Gender</th>
                                
                            </tr>
                            </thead>
                            <tbody >
                            <tr v-for="Donner in Donners" :key="Donner.id">
                                <th scope="row">1</th>
                                <th  class="nav-item dropdown pe-3">
                        <!-- Button trigger modal -->
                                    <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Profile picture
                                    </button>
                    <!-- Modal -->
                                    <div  class="modal fade modal-lg" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header ">
                                                    <h5 class="modal-title row" id="staticBackdropLabel">Profile picture</h5>
                                                    <div class="row">
                                                        <button type="button" class="btn-close col-6 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        <div class=" col-12 d-flex justify-content-end">{{ Donner.nom }}</div>
                                                        <div class=" col-12 d-flex justify-content-end">{{ Donner.Email }}</div>
                                                    </div> 
                                                </div>
                                                <div class="modal-body">
                                                    <h5>Other informations</h5>
                                                    <p>This 
                                                        <a href="#" role="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">
                                                            button
                                                        </a> triggers a popover on click.
                                                    </p>
                                                    <hr>
                                                    <h5>Tooltips in a modal</h5>
                                                    <p>
                                                        <a href="#" data-bs-toggle="tooltip" title="Tooltip">
                                                            This link
                                                        </a> and 
                                                        <a href="#" data-bs-toggle="tooltip" title="Tooltip">
                                                            that link
                                                        </a> have tooltips on hover.
                                                    </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Understood</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                     
                                </th>
                                <td>{{ Donner.nom }}</td>
                                <td>{{ Donner.Email }}</td>
                                <td>{{ Donner.Number }}</td>
                                <td>{{ Donner.Gender }}</td>
                                
                            </tr>
                            </tbody>
                        </table>
                        <!-- End Table with hoverable rows -->

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="col">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">General Form Elements</h5>

                            <!-- General Form Elements -->
                            <form @submit.prevent="createuser()">
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                <input v-model="newName" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputText" class="col-sm-2 col-form-label">Prenom</label>
                                <div class="col-sm-10">
                                <input v-model="newPrenom" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                <input v-model="newEmail" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                <input v-model="newPassword" type="password" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNumber" class="col-sm-2 col-form-label">Number</label>
                                <div class="col-sm-10">
                                <input v-model="newNumber" type="number" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNumber" class="col-sm-2 col-form-label">Profile picture</label>
                                <div class="col-sm-10">
                                <input class="form-control" type="file" id="formFile">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputDate" class="col-sm-2 col-form-label">Birth Date</label>
                                <div class="col-sm-10">
                                <input v-model="newBirthDate" type="date" class="form-control">
                                </div>
                            </div>
                            
                            <fieldset class="row mb-3">
                                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div class="col-sm-10">
                                <div class="form-check">
                                    <input v-model="newGender" class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked="">
                                    <label class="form-check-label" for="gridRadios1">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input v-model="newGender" class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                    <label class="form-check-label" for="gridRadios2">
                                        Female
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input v-model="newGender" class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled="">
                                    <label class="form-check-label" for="gridRadios3">
                                        Other
                                    </label>
                                </div>
                                </div>
                            </fieldset>
                            <div class="row mb-3">
                                <legend class="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                                <div class="col-sm-10">

                                <div class="form-check">
                                    <input  class="form-check-input" type="checkbox" id="gridCheck1">
                                    <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input v-model="newDescribtion" class="form-check-input" type="checkbox" id="gridCheck2" checked="">
                                    <label class="form-check-label" for="gridCheck2">
                                    Example checkbox 2
                                    </label>
                                </div>

                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Describtion</label>
                                <div class="col-sm-10">
                                <textarea class="form-control" style="height: 100px"></textarea>
                                </div>
                            </div>
                            <div v-show="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                                <i class="bi bi-exclamation-octagon me-1"></i>
                                    {{ this.erroMsg }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>

                            <div class="row mb-3 ">
                                <div class="col-sm-12 ">
                                <button @click.prevent="createuser()" type="submit" class="btn btn-primary float-end">Create Gerant</button>
                                </div>
                            </div>
                            

                        </form><!-- End General Form Elements -->

                        </div>
                        </div>

                        </div>
                </div>
                <div class="tab-pane fade" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab">
                  Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                </div>
              </div><!-- End Default Tabs -->

            </div>
          </div>
        </div>
    </div>
</bases>
</template>
<script>
    import  {ref,onMounted}  from 'vue'
    import { collection,doc,getDocs } from '@firebase/firestore'
    import { db,auth  } from '@/firebase/index'
    import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
    import  FonctionGenrique  from '@/firebase/fonction'
    const docRef = collection(db,'utilisateurs')
  const user = auth.currentUser
   
    export default {
      
      data(){ 
          return {
              Donners:[],
              newName:"",
              newPrenom:"",
              newEmail:"",
              newPassword:"",
              newNumber:"",
              newProfilePricture:"",
              newBirthDate:"",
              newGender:"",
              newDescribtion:"",
              error:null,
              erroMsg:""
              
          }
        },
        methods:{
            logOut(){
    
            },
            createuser(){  
                if(
                    this.newName !== "" &&
                    this.newPassword !== "" 
                
                ){
                    this.error = false
                    this.erroMsg = ""
                    const createUser = createUserWithEmailAndPassword (auth,this.newEmail, this.newPassword).then(cred=>{
                    const result = createUser;
                    const docREf = doc(db,'utilisateurs',cred.user.uid)
                    var donner={
                        Name:this.newName,
                        Prenom:this.newPrenom,
                        Email:this.newEmail,
                        Number:this.newNumber,
                        Gender:this.newGender,
                        BrithDate:this.newBirthDate,
                        Description:this.newDescribtion,
                      

                    };
                    FonctionGenrique.create(docREf,donner)
                    this.$router.push({name:"gererclient"})
                    console.log('user created')
                    return;
                    })
                    this.error=true
                    this.erroMsg = "veuillez remplire tous les champs"
                    return;
                }
             },
            showData(){
                getDocs(docRef).then( Snapshot => {
                let _items=[]
                const donners=Snapshot.docs
                donners.forEach((donner)=>{
                    let key= donner.key
                    let data=donner.data()
                    _items.push({
                    id:key,
                    nom:data.nom,
                    prenom:data.Prenom,
                    Email:data.Email,
                    BirthDate:data.BrithDate,
                    Number:data.Number,
                    Gender:data.Gender,
                    Describtion:data.Description

                    })
                })
                this.Donners=_items
                })
            },
            connexionState(){
                auth.onAuthStateChanged(user=>{
                if(user){
                    this.showData()
                        console.log('user logged in')
                    }else{
                        console.log('user logged out')
                    }
                })
            }
        },
        mounted(){
            this.connexionState()
        },
    }
  </script>