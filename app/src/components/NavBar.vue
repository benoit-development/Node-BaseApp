<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <router-link to="/" class="navbar-brand">Vue BaseApp</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link
              to="/home"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <li
                :class="[
                  isActive && 'active',
                  'nav-item'
                ]"
              >
                <a :href="href" @click="navigate" :class="['nav-link']">Home</a>
              </li>
            </router-link>
            <router-link
              to="/data"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <li
                :class="[
                  isActive && 'active',
                  'nav-item'
                ]"
              >
                <a :href="href" @click="navigate" :class="['nav-link']">Data</a>
              </li>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped></style>
