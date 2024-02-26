import React from 'react'
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';

const Dashoard = () => {
  return (
   <>
         <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
        <div class="col-md-6 col-lg-4 order-2">
            <a href="https://gloriousmatrimonial.com/admin/member" class="dashboard_animation dashboard_animation__new">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-primary">
                                        <i class="bx bxs-user"></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Total Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            118
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('gender','Male')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-info">
                                        <i class='bx bx-male-sign'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Male Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            62
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('gender','Female')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-info">
                                        <i class='bx bx-female-sign'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Female Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            56
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Paid')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-success">
                                        <i class='bx bx-credit-card'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Paid Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            14
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Not Paid')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-warning">
                                        <i class='bx bx-credit-card'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Not Paid Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            100
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="https://gloriousmatrimonial.com/admin/renewal-member" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Expired')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-danger">
                                        <i class='bx bx-credit-card'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Expired Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            4
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','APPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-success">
                                        <i class='bx bxs-like'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Approved Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            115
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','UNAPPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-dark">
                                        <i class='bx bxs-dislike'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Unapproved Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            2
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','Suspended')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-danger">
                                        <i class='bx bx-block'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Suspended Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashoard