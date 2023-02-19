<template>
    <title-page>Add</title-page>
    <form @submit.prevent="submitMain" class="border w-1/2 mx-auto p-3 rounded shadow">
        <div class="mb-3">
            <label class="block my-1">Nama</label>
            <input type="text" :class="[isName ? 'border-red-300' : 'border-gray-300']" class="border px-2 py-1 rounded shadow w-full" v-model="name">
            <warning-message v-if="isName">{{NameMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tujuan</label>
            <select :class="[isTujuan ? 'border-red-300' : 'border-gray-300']" class="px-2 py-2 rounded shadow w-full" v-model="tujuan">
                <option value="Bali">Bali</option>
                <option value="Bromo">Bromo</option>
                <option value="Maladewa">Maladewa</option>
                <option value="Bintan">Bintan</option>
                <option value="Yogyakarta">Yogyakarta</option>
            </select>
            <warning-message v-if="isTujuan">{{TujuanMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Paket</label>
            <input type="text" :class="[isPaket ? 'border-red-300' : 'border-gray-300']" class="px-2 py-1 rounded shadow w-full" v-model="paket">
            <warning-message v-if="isPaket">{{PaketMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tanggal</label>
            <input type="text" :class="[isTanggal ? 'border-red-300' : 'border-gray-300']" class="px-2 py-1 rounded shadow w-full" v-model="tanggal">
            <warning-message v-if="isTanggal">{{TanggalMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Harga</label>
            <input type="text" :class="[isHarga ? 'border-red-300' : 'border-gray-300']" class="px-2 py-1 rounded shadow w-full" v-model="harga">
            <warning-message v-if="isHarga">{{HargaMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Service</label>
            <select :class="[isService ? 'border-red-300' : 'border-gray-300']" class="px-2 py-2 rounded shadow w-full" v-model="service">
                <option value="VVIP TOUR TRAVEL">VVIP TOUR TRAVEL</option>
                <option value="VIP TOUR TRAVEL">VIP TOUR TRAVEL</option>
                <option value="PLATINUM TOUR TRAVEL">PLATINUM TOUR TRAVEL</option>
                <option value="GOLD TOUR TRAVEL">GOLD TOUR TRAVEL</option>
                <option value="SILVER TOUR TRAVEL">SILVER TOUR TRAVEL</option>
            </select>
            <warning-message v-if="isService">{{ServiceMessage}}</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Total</label>
            <input type="text" :class="[isTotal ? 'border-red-300' : 'border-gray-300']" class="px-2 py-1 rounded shadow w-full" v-model="total">
            <warning-message v-if="isTotal">{{ TotalMessage }}</warning-message>
        </div>
        <blue-button>Save</blue-button>
    </form>

    <telport to="body">
        <confirm-dialog v-if="isConfirmDialog">
            <template v-slot:title>Informasi</template>
            <template v-slot:message>{{ message }}</template>
            <template v-slot:button>
                <blue-button @click="closeConfirmDialog">Close</blue-button>
            </template>
        </confirm-dialog>
    </telport>

</template>

<script>


export default{
    inject: ['mains', 'saveMain'],
    data(){
        return{
            name: '',
            tujuan: '',
            paket: '',
            tanggal: '',
            harga: '',
            service: '',
            total: '',
            isConfirmDialog: false,
            isName: false,
            isTujuan: false,
            isPaket: false,
            isTanggal: false,
            isHarga: false,
            isService: false,
            isTotal: false,
            NameMessage: '',
            TujuanMessage: '',
            PaketMessage: '',
            TanggalMessage: '',
            HargaMessage: '',
            ServiceMessage: '',
            TotalMessage: '',
            message: ''

        }
    },
    methods: {
        submitMain() {
            if (!this.name.trim()){
                this.isName = true
                this.NameMessage = "Name harus diisi."
            } else {
                this.isName = false
            }
            if (!this.tujuan.trim()){
                this.isTujuan = true
                this.TujuanMessage = "Tujuan harus diisi."
            } else {
                this.isTujuan = false
            }
            if (!this.paket.trim()){
                this.isPaket = true
                this.PaketMessage = "Paket harus diisi."
            } else {
                this.isPaket = false
            }
            if (!this.tanggal.trim()){
                this.isTanggal = true
                this.TanggalMessage = "Tanggal harus diisi."
            } else {
                this.isTanggal = false
            }
            if (!this.harga.trim()){
                this.isHarga = true
                this.HargaMessage = "Harga harus diisi."
            } else {
                this.isHarga = false
            }
            if (!this.service.trim()){
                this.isService = true
                this.ServiceMessage = "Service harus diisi."
            } else {
                this.isService = false
            }
            if (!this.total.trim()){
                this.isTotal = true
                this.TotalMessage = "Total harus diisi."
            }else {
                this.isTotal = false
            }
            if(!this.isName && !this.isTujuan && !this.isPaket && !this.isTanggal && !this.isHarga && !this.isService && !this.isTotal) {
                var searchingMain = this.mains.find(main => main.name === this.name)
                if (searchingMain) {
                    this.isConfirmDialog = true
                    this.message = 'Nama ' +  this.name  + ' sudah ada!'
                } else {
                    this.saveMain(this.name, this.tujuan, this.paket, this.tanggal,this.harga, this.service, this.total)
                    this.isConfirmDialog = true
                    this.message = 'Add Success'
                    this.name = ''
                    this.tujuan = ''
                    this.paket = ''
                    this.tanggal = ''
                    this.harga = ''
                    this.service = ''
                    this.total = ''
                }
            }
        },
        closeConfirmDialog() {
            this.isConfirmDialog = false
        }
    }
}
</script>