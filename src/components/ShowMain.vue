<template>
    <title-page>List Tour</title-page>
    <table class="border border-collapse mx-auto">
        <thead>
            <tr>
                <th-table>No</th-table>
                <th-table>NRT</th-table>
                <th-table>Nama</th-table>
                <th-table>Program</th-table>
                <th-table>Aksi</th-table>
            </tr>
        </thead>
        <tbody>
            <tr v-for="mainn in main" :key="mainn.npm">
                <td-table>1</td-table>
                <td-table>{{mainn.npm}}</td-table>
                <td-table>{{ mainn.nama }}</td-table>
                <td-table>{{mainn.program}}</td-table>
                <td-table>HAPUS</td-table>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    inject: ['main']
}
</script>