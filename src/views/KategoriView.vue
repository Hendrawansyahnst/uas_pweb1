<script>
import axios from 'axios';
    import { ref } from 'vue';

    const readData = 'http://localhost/uaspweb/selectKategori.php';

    export default {
        data() {
            return{
              pilihan : ref([]),
            };
        },
        mounted() {
            this.readData();
        },
        methods: {
            readData() {
                axios.get(readData).then((resp) => {
                 console.log(resp);
                 this.pilihan = resp.data;
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<template>
    <li v-for="data in pilihan" :key="data.id" style="list-style: none;">
            <p>
                {{ data }}
            </p>
        </li>
</template>