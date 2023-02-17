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
  <!-- alert -->
  <confirm-dialog v-if="isConfirmDialog">
        <template v-slot:title>Caution</template>
        <template v-slot:message>Yakin data akan dihapus ?</template>
        <template v-slot:button >
            <red-button @click="deletingMain">Yes</red-button>
            <span class="mx-2"></span>
            <blue-button @click="cancelDelete">No</blue-button>
        </template>
    </confirm-dialog>
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
      isConfirmDialog: false,
      deletedName: '',
      mains: [
        {
          name: 'Ade Ryzki',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'VIP TOUR TRAVEL'
        },
        {
          name: 'Siti Masyita',
          tujuan: 'bromo',
          paket: 'keluarga',
          service: 'VVIP TOUR TRAVEL'
        },
        {
          name: 'Nanda Bima',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'GOLD TOUR TRAVEL'
        },
        {
          name: 'Tiara Geralldine',
          tujuan: 'Bali',
          paket: 'keluarga',
          service: 'PLATINUM TOUR TRAVEL'
        },
        {
          name: 'Tafa Al-Qarni',
          tujuan: 'Bali',
          paket: 'Private',
          service: 'silver TOUR TRAVEL'
        },
      ]
    }
  },
  provide(){
    return{
      mains: this.mains,
      deleteMain: this.deleteMain
    }
  },
  methods: {
    setActivePage(page){
      this.activePage = page
    },
    deleteMain(deletedName){
      this.isConfirmDialog = true
      this.deletedName = deletedName
    },
  }
}
</script>