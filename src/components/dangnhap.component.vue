<template>
  <div class="container-fluid ps-md-0 text-light">
<div class="row g-0">
<div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
<div class="col-md-8 col-lg-6">
 <div class="login d-flex align-items-center py-5">
   <div class="container">
     <div class="row">
       <div class="col-md-9 col-lg-8 mx-auto">
         <h3 class="login-heading mb-4">Chào bạn đã đến với Blog!</h3>

         <!-- Sign In Form -->
         <form>
           <div class="form-floating mb-3 text-dark">
             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
             <label for="floatingInput">Email</label>
           </div>
           <div class="form-floating mb-3 text-dark">
             <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
             <label for="floatingPassword">Password</label>
           </div>

           <div class="d-grid">
             <button class="btn btn-lg btn-light btn-login text-uppercase fw-bold mb-2" type="submit">Đăng nhập</button>
             <div class="text-center">
               <a class="small" href="/register">Chưa có tài khoản?</a>
             </div>
           </div>
           

         </form>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
</div>
</template>
<style>
.login {
min-height: 100vh;
}

.bg-image {
background-image: url('../assets/img/image4.png');
background-size: cover;
background-position: center;
}

.login-heading {
font-weight: 300;
}

.btn-login {
font-size: 0.9rem;
letter-spacing: 0.05rem;
padding: 0.75rem 1rem;
}
</style>