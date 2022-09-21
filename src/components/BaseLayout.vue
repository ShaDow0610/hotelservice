<template>
    <div :class="{'toggle-sidebar':etat}" > 
        <div id="preloader"></div>
          <!-- ======= Header ======= -->
          <header id="header" class="header fixed-top d-flex align-items-center" >
            <div ></div>
            <div class="d-flex align-items-center justify-content-between">
                <router-link to="/" class="logo d-flex align-items-center">
                    <img src="../assets/logo.jpeg" alt="">
                    <span class="d-none d-lg-block">RAPIDOS</span><br/>
                    <span class="d-none d-lg-block text-sm fs-6"><sub >.Accomodations</sub></span>
                </router-link>
                <i @click="etat=!etat" class="bi bi-list toggle-sidebar-btn"></i>
            </div><!-- End Logo -->

            <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword">
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
            </div><!-- End Search Bar -->

            <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                    <i class="bi bi-search"></i>
                </a>
                </li><!-- End Search Icon-->

                <!-- log in icom -->
                
                    <li :class="{'logged-in':statu2} && {'logged-out':statu1}"  class="nav-item dropdownn ">
                        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        
                        <span><i class="bi bi-box-arrow-in-right text primary"></i>Login / <i class="bi bi-card-list"></i>Register</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li class="dropdown-header">
                                log-in/Register
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <router-link to="/login">
                                <li class="notification-item">
                                <i class="bi bi-box-arrow-in-right text-succes"></i>
                                <div>
                                    <h4>Log-in</h4>
                                </div>
                                </li>
                            </router-link>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <router-link to="/login">
                                <li class="notification-item">
                                <i class="bi bi-card-list"></i>
                                <div>
                                    <h4>Register</h4>
                                </div>
                                </li>
                            </router-link>

                        </ul>
                    </li>
                    <!-- End log in -->
               

                <li :class="{'logged-in':statu1} && {'logged-out':statu2}"  class="nav-item dropdown ">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-bell"></i>
                    <span class="badge bg-primary badge-number">4</span>
                </a><!-- End Notification Icon -->
                

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li class="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                    </div>
                    </li>

                    <li>
                    <hr class="dropdown-divider">
                    </li>
                    <li class="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>

                </ul><!-- End Notification Dropdown Items -->

                </li><!-- End Notification Nav -->

                <li :class="{'logged-in':statu1} && {'logged-out':statu2}"   class="nav-item">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-chat-left-text"></i>
                    <span class="badge bg-success badge-number">3</span>
                </a><!-- End Messages Icon -->

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li class="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
                        <div>
                        <h4>Maria Hudson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>4 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle">
                        <div>
                        <h4>Anna Nelson</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>6 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="message-item">
                    <a href="#">
                        <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle">
                        <div>
                        <h4>David Muldon</h4>
                        <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                        <p>8 hrs. ago</p>
                        </div>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li class="dropdown-footer">
                    <a href="#">Show all messages</a>
                    </li>

                </ul><!-- End Messages Dropdown Items -->

                </li><!-- End Messages Nav -->
 <!-- card nav -->
                <li :class="{'logged-in':statu1} && {'logged-out':statu2}"   class="nav-item">
                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-cart"></i>
                    <span class="badge bg-success badge-number">9</span>
                    </a><!-- End Messages Icon -->
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">

                        <div class="card ">
                            <div class="card-body">
                            <h5 class="card-title dropdown-header">
                                <span class="text-dark fs-3 fw-bold">Cart items</span>
                                <button class="btn rounded-pill btn-danger p-2 ms-2 text-light btn-sm float-end " >delet all</button>
                            </h5>
                            <li>
                            <hr class="dropdown-divider">
                            </li>
                            <!-- Table with stripped rows -->
                            <table class="table message-item">
                                <thead>
                                <tr>
                                    <th scope="col" class="rounded-circle">Items</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" class="text-center">quantity</th>
                                    <th scope="col">price</th>
                                    <th scope="col">delet</th>
                                </tr>
                                </thead>
                                <tbody class="">
                                <tr>
                                    <th scope="row" class="rounded-circle">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" class="rounded-circle" alt="..."/>
                                    </th>
                                    <td>Brandon Jacob</td>
                                    <td class="" style="width:23%">
                                        <div class="input-group w-80">
                                            <button class="btn btn-outline-success w-15"  type="button"><i class="bi bi-arrow-up  text-center"></i></button>
                                            <input type="text" class="form-control border border-dark w-30"  placeholder="Recipient's username" aria-label="Recipient's username with two button addons">                               
                                            <button class="btn btn-outline-danger w-15  text-center"  type="button"><i class="bi bi-arrow-down  text-center"></i></button>
                                        </div>
                                    </td>
                                    <td class="">28</td>
                                    <td class="text-center">
                                        <button class=" btn btn-outline-danger "><i class="bi bi-x-circle"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                                
                            </table>
                            <!-- End Table with stripped rows -->
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                               
                                <li class="dropdown-footer row">
                                    <div class="col-12">
                                        <span class="float-start">Total</span>
                                        <span class="float-end fw-bold">$544</span>
                                    </div>
                                    <div class="col-12">
                                        <span class="float-start text-decoration-line-through">Total With discount</span>
                                        <span class="float-end fw-bold text-decoration-line-through">$244</span>
                                    </div>                                    
                                </li>
                                <hr class="dropdown-divider">
                                <div class="col-12 d-flex justify-content-end">
                                    <button type="button" class="btn btn-success m-2 ">pay</button>
                                    <button type="button" class="btn btn-secondary m-2" data-bs-dismiss="dropdown-menu">Close</button>
                                </div>
                            </div>
                        </div>                  
                    </ul>

                
                </li>

                <li :class="{'logged-in':statu1} && {'logged-out':statu2}"   class="nav-item dropdown ">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
                    <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                </a><!-- End Profile Iamge Icon -->

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i class="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                        <i class="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li>
                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                        <i class="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                    </li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>

                    <li>
                    <a @click.prevent="logOut()" class="dropdown-item d-flex align-items-center" href="#">
                        <i class="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>

                </ul><!-- End Profile Dropdown Items -->
                </li><!-- End Profile Nav -->

            </ul>
            </nav><!-- End Icons Navigation -->
            

    </header><!-- End Header -->
            <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link ">
                <i class="bi bi-house-door"></i>
                <span>Home</span>
                </router-link>
            </li><!-- End Dashboard Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item Show">
                <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-tools"></i>
                    <span>Admin Tools</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="components-nav" class="nav-content collapse UnShow" data-bs-parent="#sidebar-nav">
                    <li >
                        <router-link to="/client" ref="-.">
                        <i class="bi bi-person"></i><span>Gestionnaire Client</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/gerant">
                        <i class="bi bi-person-fill"></i><span>Gestionnaire Gerant</span>
                        </router-link>
                    </li>
                </ul>
            </li><!-- End Components Nav -->
            <router-link to="/publication">
                <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item " >

                        <a class="nav-link " href="#">
                            <i class="bi bi-tools"></i><span>Outile de Gerant</span>
                        </a>
                </li>
            </router-link><!-- End Forms Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="tables-general.html">
                    <i class="bi bi-circle"></i><span>General Tables</span>
                    </a>
                </li>
                <li>
                    <a href="tables-data.html">
                    <i class="bi bi-circle"></i><span>Data Tables</span>
                    </a>
                </li>
                </ul>
            </li><!-- End Tables Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="charts-chartjs.html">
                    <i class="bi bi-circle"></i><span>Chart.js</span>
                    </a>
                </li>
                <li>
                    <a href="charts-apexcharts.html">
                    <i class="bi bi-circle"></i><span>ApexCharts</span>
                    </a>
                </li>
                <li>
                    <a href="charts-echarts.html">
                    <i class="bi bi-circle"></i><span>ECharts</span>
                    </a>
                </li>
                </ul>
            </li><!-- End Charts Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="icons-bootstrap.html">
                    <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
                    </a>
                </li>
                <li>
                    <a href="icons-remix.html">
                    <i class="bi bi-circle"></i><span>Remix Icons</span>
                    </a>
                </li>
                <li>
                    <a href="icons-boxicons.html">
                    <i class="bi bi-circle"></i><span>Boxicons</span>
                    </a>
                </li>
                </ul>
            </li><!-- End Icons Nav -->

            <li class="nav-heading">Personal</li>

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <router-link to="/profile" class="nav-link collapsed" >
                <i class="bi bi-person"></i>
                <span>Profile</span>
                </router-link>
            </li><!-- End Profile Page Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>F.A.Q</span>
                </a>
            </li><!-- End F.A.Q Page Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" href="pages-contact.html">
                <i class="bi bi-envelope"></i>
                <span>Contact</span>
                </a>
            </li><!-- End Contact Page Nav -->

            <li :class="{'logged-in':statu2} && {'logged-out':statu1}" class="nav-item">
                <a class="nav-link collapsed" href="pages-register.html">
                <i class="bi bi-card-list"></i>
                <span>Register</span>
                </a>
            </li><!-- End Register Page Nav -->
            <router-link to="/">
                <li :class="{'logged-in':statu2} && {'logged-out':statu1}" class="nav-item">
                    <a class="nav-link collapsed" href="pages-login.html">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Login</span>
                    </a>
                </li>
            </router-link>
            <!-- End Login Page Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
                </a>
            </li><!-- End Error 404 Page Nav -->

            <li :class="{'logged-in':statu1} && {'logged-out':statu2}" class="nav-item">
                <a class="nav-link collapsed" href="pages-blank.html">
                <i class="bi bi-file-earmark"></i>
                <span>Blank</span>
                </a>
            </li><!-- End Blank Page Nav -->
        </ul>
        
     </aside><!-- End Sidebar-->

        <!-- contenu de pasge dinamique -->
        <main class="main" id="main">
            <slot/>
        </main>
        
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
        
            <div class="copyright">
                &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </footer><!-- End Footer -->

        <a   href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
      
</template>

<script>
    import { onMounted, onUnmounted,ref } from "vue";
    import { getAuth, signOut  } from "firebase/auth";
    import { db,auth  } from '@/firebase/index'


    



   

    export default {
    
        data(){
            return{
                etat:true ,
                statu1:true,
                statu2:true
            }
        },
        methods:{
            // setupUI(params) {
            //     let _loggedIn=document.querySelectorAll('.logged-in')
            //     let _loggedOut=document.querySelectorAll('.logged-out')
            //     if(params){
            //         //
            //         _loggedIn.forEach(item => item.style.display = 'block');
            //         _loggedOut.forEach(item =>item.style.display = 'none')
            //     }else{
            //         _loggedIn.forEach(item => item.style.display = 'none');
            //         _loggedOut.forEach(item =>item.style.display = 'block')
            //     }
            // },
            logOut(){
                return signOut(auth).then(() => {
                    this.$router.push({name:"dasboard"})
                // Sign-out successful.
                }).catch((error) => {
                // An error happened.
                });
            },
            connexionState(){
                auth.onAuthStateChanged(user=>{
                if (user) {
                    this.statu1=true
                    this.statu2=false
                }else{
                    this.statu1=false
                    this.statu2=true
                }
                })
            },
            // getCurrentUser(){
            //     const database=db.collection('utilisateurs').doc(firebase.autt().currentUser.uid)
            //     const dbResult = database.get()
            //     console.log(database,'resulte =',db)
            // }
        },
        mounted(){
        // this.setupUI()
        this.connexionState()
        // this.getCurrentUser()

        },
}

    
</script>