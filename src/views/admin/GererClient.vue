<template>
    <bases>
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Gestionnaire de client</h5>

                    <!-- Default Tabs -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">
                                <i class="bi bi-card-list"></i> Liste de client
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                <i class="bi bi-person-plus"></i> Ajouter Client
                            </button>
                        </li>                                <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">
                                <i class="bi bi-person-dash"></i> Retirer Client
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                        <div class="tab-pane fade  " id="home" role="tabpanel" aria-labelledby="home-tab">                               
                             <div class="col-12"></div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        </div>
                     <div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="card recent-sales overflow-auto">
                                <div class="filter">
                                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li class="dropdown-header text-start">
                                        <h6>Filtre</h6>
                                        </li>

                                        <li><a class="dropdown-item" href="#">Ajourdhui</a></li>
                                        <li><a class="dropdown-item" href="#">Ce Mois</a></li>
                                        <li><a class="dropdown-item" href="#">Cette Annee</a></li>
                                    </ul>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Recent Sales <span>| Ajourdhui</span></h5>
                                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                    <div class="dataTable-top">
                                        <div class="dataTable-dropdown">
                                            <label>
                                                <select class="dataTable-selector">
                                                    <option value="5">5</option>
                                                    <option value="10" selected="">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                    <option value="25">25</option>
                                                </select> entries per page
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
                                                    <th scope="col" data-sortable="" style="width: 10.8846%;">
                                                        <a href="#" class="dataTable-sorter">#</a>
                                                    </th>
                                                    <th scope="col" data-sortable="" style="width: 23.9802%;" class="asc">
                                                        <a href="#" class="dataTable-sorter">Customer</a>
                                                    </th>
                                                    <th scope="col" data-sortable="" style="width: 40.1371%;" class="">
                                                        <a href="#" class="dataTable-sorter">Product</a>
                                                    </th>
                                                    <th scope="col" data-sortable="" style="width: 9.86421%;">
                                                        <a href="#" class="dataTable-sorter">Price</a>
                                                    </th>
                                                    <th scope="col" data-sortable="" style="width: 15.1365%;">
                                                        <a href="#" class="dataTable-sorter">Status</a>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <a href="#">#2644</a>
                                                    </th>
                                                    <td>Angus Grady</td>
                                                    <td>
                                                        <a href="#" class="text-primar">Ut voluptatem id earum et</a>
                                                    </td>
                                                    <td>$67</td>
                                                    <td>
                                                        <span class="badge bg-danger">Rejected</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <a href="#">#2049</a>
                                                    </th>
                                                    <td>Ashleigh Langosh</td>
                                                    <td>
                                                        <a href="#" class="text-primary">At recusandae consectetur</a>
                                                    </td>
                                                    <td>$147</td>
                                                    <td>
                                                        <span class="badge bg-success">Approved</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <a href="#">#2457</a>
                                                    </th>
                                                    <td>Brandon Jacob</td>
                                                    <td>
                                                        <a href="#" class="text-primary">At praesentium minu</a>
                                                    </td>
                                                    <td>$64</td>
                                                    <td>
                                                        <span class="badge bg-success">Approved</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <a href="#">#2147</a>
                                                    </th>
                                                    <td>Bridie Kessler</td>
                                                    <td>
                                                        <a href="#" class="text-primary">Blanditiis dolor omnis similique</a>
                                                    </td>
                                                    <td>$47</td>
                                                    <td>
                                                        <span class="badge bg-warning">Pending</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <a href="#">#2644</a>
                                                    </th>
                                                    <td>Raheem Lehner</td>
                                                    <td>
                                                        <a href="#" class="text-primary">Sunt similique distinctio</a>
                                                    </td>
                                                    <td>$165</td>
                                                    <td>
                                                        <span class="badge bg-success">Approved</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="dataTable-bottom">
                                        <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
                                        <nav class="dataTable-pagination">
                                            <ul class="dataTable-pagination-list"> 
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- End Default Tabs -->

            </div>
          </div>
        </div>
    </div>
</bases>
</template>