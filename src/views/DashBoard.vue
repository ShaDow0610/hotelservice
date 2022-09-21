<template>
  <bases>
  <div class="pagetitle">
      <h1>Tableau de board</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Acceuille</a></li>
          <li class="breadcrumb-item active">Tableau de board</li>
        </ol>
      </nav>
      <section class="section dashboard">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
<!-- card des nouveau visiteur -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">

                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filtre</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                      <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                      <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Nouveau Visiteur <span>| Aujourdhui</span></h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-eye-fill"></i>
                      </div>
                      <div class="ps-3">
                        <h6>145</h6>
                        <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>

              </div>
              </div>
<!--fin card des nouveau visiteur  -->
<!--  card des nouveau compte creer -->
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">

                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filtre</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                      <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                      <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Nouveau compte <span>| Ce Mois</span></h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-person-circle"></i>
                      </div>
                      <div class="ps-3">
                        <h6>34</h6>
                        <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
<!-- fin  card des nouveau compte creer -->
<!--  card des nouveau Gerant -->
              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filtre</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                      <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                      <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Nouveau Gerant <span>| Cettte Annees</span></h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>14</h6>
                        <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<!-- fin  card des nouveau geran -->
<!-- Compte Gerant Recent -->
              <div class="col-12">
                <div class="card recent-sales overflow-auto">

                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filtre</h6>
                      </li>

                      <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                      <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                      <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">Compte Gerant Resent <span>| Aujourdhui</span></h5>

                    <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                      <div class="dataTable-top">
                        <div class="dataTable-dropdown">
                          <label>
                            <span>Liste de compte gearant creer aujourdhui</span>
                          </label>
                          </div>
                          <div class="dataTable-search">
                            <input class="dataTable-input" placeholder="Search..." type="text">
                          </div>
                        </div>
                        <div class="dataTable-container">
                          <table class="table table-borderless datatable dataTable-table">
                            <thead>
                              <tr>
                                <th scope="col" data-sortable="" style="width: 10.9412%;">
                                  <a href="#" class="dataTable-sorter">#</a>
                                </th>
                                <th scope="col" data-sortable="" style="width: 24%;">
                                  <a href="#" class="dataTable-sorter">Gerant</a>
                                </th>
                                <th scope="col" data-sortable="" style="width: 25.1176%;">
                                  <a href="#" class="dataTable-sorter">Structure</a>
                                </th>
                                <th scope="col" data-sortable="" style="width: 24.88235%;">
                                  <a href="#" class="dataTable-sorter">Localisation</a>
                                </th>
                                <th scope="col" data-sortable="" style="width: 15.0588%;">
                                  <a href="#" class="dataTable-sorter">Status</a>
                                </th>
                              </tr>
                            </thead>
                            <!-- <tbody v-for="i in 4">
                              <tr>
                                <th scope="row">
                                  <a href="#">sdfsdfsdfsdf</a>
                                </th>
                                <td>$sdfsdfs</td>
                                <td>
                                  <a href="#" class="">sdfsdfsdf}</a>
                                </td>
                                <td>sdfsdfs<sup>em</sup></td>
                                <td>
                                  <span class="badge bg-success">Valider</span>
                                </td>
                              </tr>
                            </tbody> -->
                            <tbody  v-for="item in items" :key="item.id">
                              <tr>
                                <th scope="row">
                                  <a href="#">{{ item.nom }}</a>
                                </th>
                                <td>sdfsdfs</td>
                                <td>
                                  <a href="#" class="">{{ item.prenom }}</a>
                                </td>
                                <td>fvfghdf<sup>em</sup></td>
                                <td>
                                  <span class="badge bg-success">Valider</span>
                                </td>
                              </tr>
                            </tbody>
                          
                          </table>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item disabled">
                                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#">Next</a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div class="col-6">
                            <div class="dataTable-bottom">
                              <div class="dataTable-info float-end">
                                <div class="btn btn-info ">Voir tous</div>
                              </div>
                              <nav class="dataTable-pagination">
                                <ul class="dataTable-pagination-list"></ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
<!--fin Compte Gerant Recents  -->
<!-- Les plus visiter -->
              <div class="col-12">
                <div class="card top-selling overflow-auto">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filtre</h6>
                      </li>
                      <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                      <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                      <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                    </ul>
                  </div>
                  <div class="card-body pb-0">
                    <h5 class="card-title">Les plus visiter <span>| Aujourdhui</span></h5>

                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Image</th>
                          <th scope="col">Strucuture</th>
                          <th scope="col">Localisation</th>
                          <th scope="col">Nombre de visiteur</th>
                          <th scope="col">Prix</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""></a></th>
                          <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                          <td>Bepanda 7em</td>
                          <td class="fw-bold">24</td>
                          <td>$25,828 <span>/ Uniter</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="dataTable-bottom">
                    <div class="dataTable-info float-end">
                      <div class="btn btn-info ">Voir tous</div>
                    </div>
                    <nav class="dataTable-pagination">
                      <ul class="dataTable-pagination-list"></ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filtre</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                  <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                  <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Recent Activity <span>| Aujourdhui</span></h5>

                <div class="activity">

                  <div class="activity-item d-flex">
                    <div class="activite-label">32 min</div>
                    <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                    <div class="activity-content">
                      Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
                    </div>
                  </div><!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">56 min</div>
                    <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                    <div class="activity-content">
                      Voluptatem blanditiis blanditiis eveniet
                    </div>
                  </div><!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 hrs</div>
                    <i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                    <div class="activity-content">
                      Voluptates corrupti molestias voluptatem
                    </div>
                  </div><!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">1 day</div>
                    <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                    <div class="activity-content">
                      Tempore autem saepe <a href="#" class="fw-bold text-dark">occaecati voluptatem</a> tempore
                    </div>
                  </div><!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">2 days</div>
                    <i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                    <div class="activity-content">
                      Est sit eum reiciendis exercitationem
                    </div>
                  </div><!-- End activity item-->

                  <div class="activity-item d-flex">
                    <div class="activite-label">4 weeks</div>
                    <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                    <div class="activity-content">
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </div>
                  </div><!-- End activity item-->

                </div>

              </div>
            </div>
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filtre</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Aujourdhui</a></li>
                  <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                  <li><a class="dropdown-item" href="#">Cettte Annees</a></li>
                </ul>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">News &amp; Updates <span>| Aujourdhui</span></h5>

                <div class="news">
                  <div class="post-item clearfix">
                    <img src="assets/img/news-1.jpg" alt="">
                    <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                    <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                  </div>

                  <div class="post-item clearfix">
                    <img src="assets/img/news-2.jpg" alt="">
                    <h4><a href="#">Quidem autem et impedit</a></h4>
                    <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                  </div>

                  <div class="post-item clearfix">
                    <img src="assets/img/news-3.jpg" alt="">
                    <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                    <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                  </div>

                  <div class="post-item clearfix">
                    <img src="assets/img/news-4.jpg" alt="">
                    <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                    <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                  </div>

                  <div class="post-item clearfix">
                    <img src="assets/img/news-5.jpg" alt="">
                    <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                    <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                  </div>
                  
                </div><!-- End sidebar recent posts-->

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </bases>
</template>
<script>
  import { onMounted,  ref } from 'vue';
  import { db,auth } from '@/firebase/index'
  import { collection, getDocs, QuerySnapshot  } from "firebase/firestore";
  import {FonctionGenrique} from '@/firebase/fonction'
  
  
  const docRef = collection(db,'gerants')
  
  

  export default {
    data(){
     return{
        items:[],
       
     }
    },
    
    methods:{
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
              prenom:data.prenom
            })
          })
          this.items=_items
        })
      },
      connexionState(){
        auth.onAuthStateChanged(user=>{
        if(user){
            this.showData() 
            }else{
            }
        })
      }
    },
    mounted(){
      this.connexionState()
    },
}
</script>
