<template>
    <title-page>List Tour</title-page>
    <table class="border border-collapse mx-auto">
        <thead>
            <tr>
                <th-table>No</th-table>
                <th-table>Nama</th-table>
                <th-table>Tujuan</th-table>
                <th-table>Paket</th-table>
                <th-table>Service</th-table>
                <th-table>Action</th-table>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-gray-200 hover:bg-blue-100" v-for="(main, index) in mains" :key="main.name">
                <td-table>{{index +1}}</td-table>
                <td-table>{{main.name}}</td-table>
                <td-table>{{ main.tujuan }}</td-table>
                <td-table>{{main.paket}}</td-table>
                <td-table>{{main.service}}</td-table>
                <td-table>
                    <button class="bg-blue-300 px-3 py-1 rounded shadow  hover:bg-blue-500">Update</button>
                    <span class="mx-2"></span>
                    <button class="bg-red-500 px-3 py-1 rounded shadow  hover:bg-red-700">Delete</button>
                </td-table>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    inject: ['mains']
}
</script>