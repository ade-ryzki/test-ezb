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
                    <blue-button>Update</blue-button>
                    <span class="mx-2"></span>
                    <red-button @click="deleteMain(main.name)">Delete</red-button>
                </td-table>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    inject: ['mains', 'deleteMain']
}
</script>