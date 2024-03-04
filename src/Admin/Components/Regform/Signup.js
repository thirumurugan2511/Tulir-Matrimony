import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div class="container">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <div class="card  col-md-4 mt-5 mx-auto">
          <div class="card-body">
            <div class="app-brand justify-content-center">
              <a href="https://gloriousmatrimonial.com/admin/login" class="app-brand-link gap-2">
                <img src="https://www.gloriousmatrimonial.com/public//assets/logo/4605841707816766.png" alt="" class="w-100"/>
                    {/* <h3>RTS Matrimony</h3> */}
                </a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                  <i class="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>
            <p class="mb-4">Welcome to RTS Matrimony. Please create an new account</p>
                        <form id="formAuthentication" class="mb-3" action="https://gloriousmatrimonial.com/admin/authenticate" method="POST">
              <input type="hidden" name="_token" value="RiYE39oDnRr2BvE3Hq8Ofqt7RPsF4jYozyM9t91O"/>              <div class="mb-3 text-start">
                <label for="email" class="form-label">Email or Username</label>
                <input type="text" value="" class="form-control p-3" id="email" name="email" placeholder="Enter your email or username" autofocus=""/>
                              </div>
              <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                  <label class="form-label" for="password">Password</label>
                  <a href="javascript:void(0)">
                  </a>
                </div>
                <div class="input-group input-group-merge">
                  <input type="password" value="" id="password" class="form-control p-3" name="password" placeholder="············" aria-describedby="password" />
                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary d-grid w-100 p-3" type="submit">Sign up</button>
              </div>
            </form>
            <div class=" overflow-auto mt-3 mt-lg-4">
              <div class="male_femaleusersets">
                <div class="singleviewlsudgfvs d-flex text-center">
                  <p>Already Have an Account? <Link to="/Signin" className='mx-2'>Sign In </Link></p>
                  {/* <table class="w-100">
                    <thead>
                      <tr>
                        <th><h4 id="userName" data-id="demo@gmail.com">demo@gmail.com</h4></th>
                        <th><h4 id="passwords" data-id="123456"><p>123456</p></h4></th>
                        <th><h4><button id="addAdmindetails">Copy</button></h4></th>
                      </tr>
                    </thead>
                  </table>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Signup