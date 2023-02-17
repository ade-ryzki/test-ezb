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
import { computed } from 'vue'



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
          paket: 'Family',
          tanggal: '15 march',
          harga: '2.000.000',
          service: 'VIP TOUR TRAVEL',
          total: '3',
        },
        {
          name: 'Siti Masyita',
          tujuan: 'bromo',
          paket: 'Family',
          tanggal: '15 march',
          harga: '1.800.000',
          service: 'VVIP TOUR TRAVEL',
          total: '2',
        },
        {
          name: 'Nanda Bima',
          tujuan: 'Bali',
          paket: 'Family',
          tanggal: '15 march',
          harga: '3.000.000',
          service: 'GOLD TOUR TRAVEL',
          total: '3',
        },
        {
          name: 'Tiara Geralldine',
          tujuan: 'Bali',
          paket: 'Family',
          tanggal: '15 march',
          harga: '1.500.000',
          service: 'PLATINUM TOUR TRAVEL',
          total: '5',
        },
        {
          name: 'Tafa Al-Qarni',
          tujuan: 'Bali',
          paket: 'Private',
          tanggal: '15 march',
          harga: '4.000.000',
          service: 'silver TOUR TRAVEL',
          total: '1',
        },
      ]
    }
  },
  provide(){
    return{
      mains: computed(()=> this.mains),
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
    deletingMain(){
      this.mains = this.mains.filter(main => main.name !== this.deletedName)
      this.isConfirmDialog = false
    },
    cancelDelete(){
      this.isConfirmDialog = false
      this.deletedName = ''
    }
  }
}
</script>