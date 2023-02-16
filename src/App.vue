<template>
  <!-- Navbar -->
  <header class="w-screen bg-blue-300 px-3 py-2 text-center font-bold grid grid-cols-2">
    EZB TOUR TEST
    <div>
      <menu-button @click="setActivePage('show-main')" :class="[activePage === 'show-main' ? 'text-black' : 'bg-red-500 text-white']">Main</menu-button>
        <span class="mx-2"></span>
      <menu-button @click="setActivePage('input-main')" :class="[activePage === 'input-main' ? 'text-black' : 'bg-red-500 text-white']" >Input</menu-button>
    </div>
  </header>
  <!-- body -->
  <component :is="activePage"></component>
</template>

<script>
import inputMain from './components/InputMain.vue'
import showMain from './components/ShowMain.vue'

export default{
  components: {
    inputMain,
    showMain
  },
  data(){
    return{
      activePage: 'show-main'
    }
  },
  methods: {
    setActivePage(page){
      this.activePage = page
    }
  }
}
</script>