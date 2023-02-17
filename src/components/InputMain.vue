<template>
    <title-page>Add</title-page>
    <form class="border w-1/2 mx-auto p-3 rounded shadow">
        <div class="mb-3">
            <label class="block my-1">Nama</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full">
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tujuan</label>
            <select class="border border-red-300 px-2 py-2 rounded shadow w-full">
                <option value="Bali">Bali</option>
                <option value="Bromo">Bromo</option>
                <option value="Maladewa">PLATINUM TOUR TRAVEL</option>
                <option value="Bintan">GOLD TOUR TRAVEL</option>
                <option value="Yogyakarta">SILVER TOUR TRAVEL</option>
            </select>
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Paket</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full">
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Tanggal</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full">
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Harga</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full">
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Service</label>
            <select class="border border-red-300 px-2 py-2 rounded shadow w-full">
                <option value="VVIP TOUR TRAVEL">VVIP TOUR TRAVEL</option>
                <option value="VIP TOUR TRAVEL">VIP TOUR TRAVEL</option>
                <option value="PLATINUM TOUR TRAVEL">PLATINUM TOUR TRAVEL</option>
                <option value="GOLD TOUR TRAVEL">GOLD TOUR TRAVEL</option>
                <option value="SILVER TOUR TRAVEL">SILVER TOUR TRAVEL</option>
            </select>
            <p class="text-red-300">message</p>
        </div>
        <div class="mb-3">
            <label class="block my-1">Total</label>
            <input type="text" class="border border-red-300 px-2 py-1 rounded shadow w-full">
            <p class="text-red-300">message</p>
        </div>
        <blue-button>Save</blue-button>
    </form>
</template>