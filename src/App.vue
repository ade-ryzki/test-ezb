<template>
  <!-- Navbar -->
  <header class="w-screen bg-blue-300 px-3 py-2  font-bold flex justify-between">
    <div>
      EZB TOUR TEST
    </div>
    <div>
      <menu-button @click="setActivePage('show-main')" :class="[activePage === 'show-main' ? 'text-black' : 'bg-red-500 text-white']">Main</menu-button>
        <span class="mx-2"></span>
      <menu-button @click="setActivePage('input-main')" :class="[activePage === 'input-main' ? 'text-black' : 'bg-red-500 text-white']" >Add</menu-button>
    </div>
  </header>
  <!-- body -->
  <div id="content" class="container mx-auto py-2">
    <component :is="activePage"></component>
  </div>
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
      activePage: 'show-main',
      list: [
        {
          npm: '132456',
          nama: 'ade ryzki',
          program: 'VIP TOUR TRAVEL'
        },
        {
          npm: '11223345',
          nama: 'tiara geralldine',
          program: 'VIP TOUR TRAVEL'
        },
        {
          npm: '2211325',
          nama: 'ade ryzki',
          program: 'GOLD TOUR TRAVEL'
        },
        {
          npm: '66532546',
          nama: 'diyan',
          program: 'SILVER TOUR TRAVEL'
        },
        {
          npm: '4562542',
          nama: 'heri',
          program: 'GOLD TOUR TRAVEL'
        },
      ]
    }
  },
  provide(){
    return{
      main: this.main
    }
  },
  methods: {
    setActivePage(page){
      this.activePage = page
    }
  }
}
</script>