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
          nama: 'ade ryzki',
          jumlah:'2',
          deskripsi: 'Tour Road To Bali',
          service:'VIP TOUR'
        },
        {
          nama: 'tya',
          jumlah:'4',
          deskripsi: 'Tour Road To Borobudur',
          service:'GOLD TOUR'
        },
        {
          nama: 'Zhafran',
          jumlah:'2',
          deskripsi: 'Tour Road To Bintan',
          service:'SILVER TOUR'
        }
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