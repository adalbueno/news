<template>
  <div id="app" class="app">
    <header class="header"></header>
    <main class="main">
      <div class="main-nav">
        <app-main-nav class="nav">
          <app-main-nav-item title="Home" icon="home" link="home"></app-main-nav-item>
          <app-main-nav-item title="News" icon="newspaper" link="news"></app-main-nav-item>
          <app-main-nav-item title="Info" icon="info-circle" link="info"></app-main-nav-item>
          <app-main-nav-item title="Help" icon="question-circle" link="help"></app-main-nav-item>
        </app-main-nav>
        <app-main-nav class="nav">
          <app-main-nav-item title="Account" icon="user" link="account"></app-main-nav-item>
          <app-main-nav-item title="Logout" icon="sign-out-alt" link="logout"></app-main-nav-item>
        </app-main-nav>
      </div>
      <section class="main-content">
        <router-view></router-view>
      </section>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

