<template lang="html">
  <nav>
    <router-link to="/">
      <div class="logo"><img src="" alt="">Squirrel</div>
    </router-link>

    <router-link to="/play">
      <icon name="bars" id="menu-search"></icon>
    </router-link>

    <router-link to="/view">
        <div class="menus">
            <p>Menu</p>
            <icon name="bars"></icon>
            <icon name="circle"></icon>
            <icon name="circle" scale="2"></icon>
        </div>
    </router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 100;
    padding: 0.5rem;
    width: 100vw;
    height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkslategray;
    box-shadow: 10px 0px 10px rgba(0,0,0,0.4), 0 10px 16px rgba(0,0,0,0.4);
}

nav .logo {
    font-size: 2rem;
}

nav .menus {
    display: flex;
    justify-content: space-around;
}

a:visited {
color: white;
}
</style>
