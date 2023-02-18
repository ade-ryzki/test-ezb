<template>
    <title-page>Add</title-page>
    <form @submit.prevent="submitMain" class="border w-1/2 mx-auto p-3 rounded shadow">
        <div class="mb-3">
            <label class="block my-1">Nama</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full" v-model="name">
            <warning-message v-if="isName">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tujuan</label>
            <select class="border border-red-300 px-2 py-2 rounded shadow w-full" v-model="tujuan">
                <option value="Bali">Bali</option>
                <option value="Bromo">Bromo</option>
                <option value="Maladewa">PLATINUM TOUR TRAVEL</option>
                <option value="Bintan">GOLD TOUR TRAVEL</option>
                <option value="Yogyakarta">SILVER TOUR TRAVEL</option>
            </select>
            <warning-message v-if="isTujuan">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Paket</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full" v-model="paket">
            <warning-message v-if="isPaket">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tanggal</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full" v-model="tanggal">
            <warning-message v-if="isTanggal">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Harga</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full" v-model="harga">
            <warning-message v-if="isHarga">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Service</label>
            <select class="border border-red-300 px-2 py-2 rounded shadow w-full" v-model="service">
                <option value="VVIP TOUR TRAVEL">VVIP TOUR TRAVEL</option>
                <option value="VIP TOUR TRAVEL">VIP TOUR TRAVEL</option>
                <option value="PLATINUM TOUR TRAVEL">PLATINUM TOUR TRAVEL</option>
                <option value="GOLD TOUR TRAVEL">GOLD TOUR TRAVEL</option>
                <option value="SILVER TOUR TRAVEL">SILVER TOUR TRAVEL</option>
            </select>
            <warning-message v-if="isService">Message</warning-message>
        </div>
        <div class="mb-3">
            <label class="block my-1">Total</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full" v-model="total">
            <warning-message v-if="isTotal">Message</warning-message>
        </div>
        <blue-button>Save</blue-button>
    </form>

</template>

<script>
export default{
    data(){
        return{
            name: '',
            tujuan: '',
            paket: '',
            tanggal: '',
            harga: '',
            service: '',
            total: '',
            isName: false,
            isTujuan: false,
            isPaket: false,
            isTanggal: false,
            isHarga: false,
            isService: false,
            isTotal: false
        }
    },
    methods: {
        submitMain() {
            if (this.name.trim()) {
                this.isName = true
            }
        }
    }
}
</script>