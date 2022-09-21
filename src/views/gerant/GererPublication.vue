<template>
    <bases>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
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
                        <i class="bi bi-plus-square"></i> Ajouter
                    </button>
                    </li>
                    <li class="nav-item flex-fill" role="presentation">
                    <button class="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-justified" type="button" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">
                        <i class="bi bi-dash-square"></i> Retirer
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
                                    <th scope="col">Accomodation Picture</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Sanding</th>
                                    <th scope="col">Added Date</th>
                                    
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
                                                            <div class=" col-12 d-flex justify-content-end"></div>
                                                            <div class=" col-12 d-flex justify-content-end"></div>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    
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
                                <form @submit.prevent="">
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Publication Name</label>
                                    <div class="col-sm-10">
                                    <input v-model="PostName" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputNumber" class="col-sm-2 col-form-label">Publication Picture</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="file" id="formFile">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputDate" class="col-sm-2 col-form-label">Publication Date</label>
                                    <div class="col-sm-10">
                                    <input v-model="PostDate" type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputTime" class="col-sm-2 col-form-label">Publication Time</label>
                                    <div class="col-sm-10">
                                        <input v-model="postHour" type="time" class="form-control">
                                    </div>
                                </div>
                                
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Accomodation Type</label>
                                    <div class="col-sm-10">
                                        <select v-model="postType" class="form-select" aria-label="Default select example">
                                            <option  value="Hotel">Hotel Room</option>
                                            <option  value="2"> Cruise Ship Room</option>
                                            <option  value="3">House For Rent</option>
                                            <option  value="4">Host Appartments</option>
                                        </select>
                                    </div>
                                </div>


                                <fieldset class="row mb-3">
                                    <legend class="col-form-label col-sm-2 pt-0">Standing</legend>
                                    <div class="col-sm-10">
                                    <div class="form-check">
                                        <input v-model="PostStanding" class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Appartment" checked="">
                                        <label class="form-check-label" for="gridRadios1">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="PostStanding" class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="hotel">
                                        <label class="form-check-label" for="gridRadios2">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="PostStanding" class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="ship" >
                                        <label class="form-check-label" for="gridRadios3">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="PostStanding" class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="house" >
                                        <label class="form-check-label" for="gridRadios3">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star"></i>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="PostStanding" class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="house" >
                                        <label class="form-check-label" for="gridRadios3">
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                            <i class="bi bi-star-fill text-warning"></i>
                                        </label>
                                    </div>
                                    </div>
                                </fieldset>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">PRICE</span>
                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                    <span class="input-group-text">CFA</span>
                                    <span class="input-group-text">
                                        <label class="col-sm-2 col-form-label">/</label>
                                        <div class="col-sm-10">
                                            <select v-model="Durabylity" class="form-select" aria-label="Default select example">
                                                <option  value="1">Day</option>
                                                <option  value="1">3 Day</option>
                                                <option  value="2">Month</option>
                                                <option  value="2">3 Month</option>
                                                <option  value="3">Year</option>
                                                <option  value="4">3 Year</option>
                                            </select>
                                        </div>
                                    </span>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Describtion</label>
                                    <div class="col-sm-10">
                                    <textarea v-model="postDescribtion"  class="form-control" style="height: 100px"></textarea>
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

export default {
    data(){
        return{
            
        }
    },
    methods:{
        addPost(){

        }
    }

}
        
    
</script>
