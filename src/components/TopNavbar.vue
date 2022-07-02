<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">투미프롬미</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Write' }">편지쓰기</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Faq' }">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'MyPage' }">마이페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Admin' }">관리자</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <router-link class="btn btn-outline-success" type="" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style></style>
