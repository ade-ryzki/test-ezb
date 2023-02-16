<template>
  <!-- Navbar -->
  <header class="w-screen bg-blue-300 px-3 py-2  font-bold flex justify-between">
    <div>
      EZB TOUR TEST
    </div>
    <div>
      <menu-button @click="setActivePage('show-mains')" :class="[activePage === 'show-mains' ? 'text-black' : 'bg-red-500 text-white']">Main</menu-button>
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
import InputMain from './components/InputMain.vue'
import ShowMains from './components/ShowMains.vue'

export default{
  components: {
    InputMain,
    ShowMains
  },
  data(){
    return{
      activePage: 'show-mains',
      mains: [
        {
          name: 'ade ryzki',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'VIP TOUR TRAVEL'
        },
        {
          name: 'siti masyita',
          tujuan: 'bromo',
          paket: 'keluarga',
          service: 'VVIP TOUR TRAVEL'
        },
        {
          name: 'nanda bima',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'GOLD TOUR TRAVEL'
        },
        {
          name: 'tiara',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'PLATINUM TOUR TRAVEL'
        },
      ]
    }
  },
  provide(){
    return{
      mains: this.mains
    }
  },
  methods: {
    setActivePage(page){
      this.activePage = page
    }
  }
}
</script>