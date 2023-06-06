<script>
import {RouterLink} from "vue-router";
    export default {
              name: 'Navbar',

    }
</script>
<template>
    <nav class="navbar navbar-expand-lg sticky-top shadow">
      <div class="container-fluid">
        <RouterLink class="navbar-brand fw-bold" to="/">MUSICA</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 gap-4 mb-lg-0">
            <li class="nav-item">
              <RouterLink active-class="bg-danger text-light rounded-pill" class="nav-link fw-bold" to="/">All Music</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink active-class="bg-danger text-light rounded-pill" class="nav-link fw-bold" to="/popular-music">Popular Music</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink active-class="bg-danger text-light rounded-pill" class="nav-link fw-bold" to="/new-music">New Music</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<style>
  .navbar{
    color: transparent !important;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    -o-backdrop-filter: blur(3px);
    -moz-backdrop-filter: blur(3px);
    z-index: 99;

  }

</style>