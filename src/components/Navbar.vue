<template>
  <header :class="{ 'scrolled': isScrolled && isHomePage }">
    <div class="container" :class="{ 'scrolled': isScrolled }">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </div>
      <nav class="nav-menu" :class="{ 'is-active': isMenuActive }">
        <router-link :to="{ name: 'Home' }" @click="handleNavClick">Home</router-link>
        <router-link :to="{ name: 'Blogs' }" @click="handleNavClick">Blogs</router-link>
        <router-link :to="{ name: 'About' }" @click="handleNavClick">About</router-link>
      </nav>
      <div class="menu-toggle" :class="{ 'open': isMenuActive }" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="overlay" :class="{ 'is-active': isMenuActive }" @click="toggleMenu"></div>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const isMenuActive = ref(false);
    const isScrolled = ref(false);
    const route = useRoute();

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };

    const handleNavClick = () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    };

    const isHomePage = computed(() => {
      const isHome = route.name === 'Home';
      return isHome;
    });

    const handleScroll = () => {
      if (isHomePage.value) {
        isScrolled.value = window.scrollY > 200;
      } else {
        isScrolled.value = true;
      }
    };

    watch(isHomePage, () => {
        handleScroll()
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      isScrolled.value = true;
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isMenuActive, toggleMenu, handleNavClick, isScrolled, isHomePage };
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 79px;
  padding: 0 5vw;
  z-index: 100;
  transition: 0.3s ease;
  color: white;
}

.container.scrolled {
  background: #C8BFE7; 
  color: black;
  box-shadow: 0 1px 8px black;
}

.logo a {
  text-decoration: none;
  font-weight: 600;
  font-size: 1.6em;
  color: inherit;
}

nav {
  display: flex;
  align-items: center;
  z-index: 101;
  line-height: 79px;
  color: inherit;
}

nav a {
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 500;
  padding: 0 1vw;
  color: inherit;
}

nav a:hover {
  color: #e98e18;
}

nav a.router-link-exact-active {
  color: #e98e18;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 102;
}

.menu-toggle.open .bar:nth-child(1) {
  position: relative;
  transform: rotate(-45deg);
  top: 9px;
  
}

.menu-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open .bar:nth-child(3) {
  position: relative;
  transform: rotate(45deg);
  top: -9px;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: all 0.3s;
}

.container.scrolled .menu-toggle .bar {
    background-color: black;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

@media (max-width: 768px) {
  .container {
    padding: 10px 30px;
  }

  nav {
    position: fixed;
    top: 0;
    right: 0;
    background: #C8BFE7;
    backdrop-filter: blur(10px);
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding-top: 60px;
    color: black;
  }

  nav.is-active {
    transform: translateX(0);
  }

  .overlay.is-active {
    display: block;
  }

  nav a {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    font-size: 1.5em;
    transition: 0.3s ease;
  }

  nav a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ca18e9;
  }

  nav a.router-link-exact-active {
    color: #ca18e9;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
