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
    <!-- <keep-alive> -->
      <component :is="activePage"></component>
    <!-- </keep-alive> -->
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
import UpdateMain from './components/UpdateMain.vue'
import { computed } from 'vue'



export default{
  components: {
    InputMain,
    ShowMains,
    UpdateMain
  },
  data(){
    return{
      activePage: 'show-mains',
      isConfirmDialog: false,
      deletedName: '',
      oldMain: {
        name: '',
        tujuan: '',
        paket: '',
        tanggal: '',
        harga: '',
        service: '',
        total: ''
      },
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
          tujuan: 'Maladewa',
          paket: 'Family',
          tanggal: '15 march',
          harga: '3.000.000',
          service: 'GOLD TOUR TRAVEL',
          total: '3',
        },
        {
          name: 'Tiara Geralldine',
          tujuan: 'Bintan',
          paket: 'Family',
          tanggal: '15 march',
          harga: '1.500.000',
          service: 'PLATINUM TOUR TRAVEL',
          total: '5',
        },
        {
          name: 'Tafa Al-Qarni',
          tujuan: 'Yogyakarta',
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
      main: computed(()=> this.oldMain),
      deleteMain: this.deleteMain,
      saveMain: this.saveMain,
      updateMain: this.updateMain,
      updatedMain: this.updatedMain
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
    },
    saveMain(enteredName, enteredTujuan, enteredPaket, enteredTanggal, enteredHarga, enteredService, enteredTotal){
      const newMain = {
        name: enteredName,
        tujuan: enteredTujuan,
        paket: enteredPaket,
        tanggal: enteredTanggal,
        harga: enteredHarga,
        service: enteredService,
        total: enteredTotal
      }
      this.mains.push(newMain)
    },
    updateMain(updateMain) {
      this.activePage = 'update-main'
      this.oldMain = {
        name : updateMain.name,
        tujuan : updateMain.tujuan,
        paket : updateMain.paket,
        tanggal : updateMain.tanggal,
        harga : updateMain.harga,
        service : updateMain.service,
        total : updateMain.total,
      }
    },
    updatedMain (name, updateTujuan, updatePaket, updateTanggal, updateHarga, updateService, updateTotal) {
      var searchingMain =this.mains.find(main => main.name === name)

      searchingMain.tujuan = updateTujuan
      searchingMain.paket = updatePaket
      searchingMain.tanggal = updateTanggal
      searchingMain.harga = updateHarga
      searchingMain.service = updateService
      searchingMain.total = updateTotal
    }
  }
}
</script>