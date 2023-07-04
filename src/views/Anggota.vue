<template>
  <div>
    <h1 class="ListAnggota">
      List Anggota
    </h1>
    <div>
      <router-link class="button button-add" :to="`/insert-anggota/`">Tambah Anggota</router-link>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6" v-for="(data, index) in anggota" :key="data.id">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ data.nama }}</h5>
            <p class="card-text">no.{{ data.nomor }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ data.jenis_kelamin }}</li>
            <li class="list-group-item">No. Telepon: {{ data.no_hp }}</li>
            <li class="list-group-item">Alamat: {{ data.alamat }}</li>
            <li class="list-group-item">Tanggal Terdaftar: {{ data.tanggal_terdaftar }}</li>
          </ul>
          <div class="card-body">
            <router-link class="button-edit" :to="`/edit-anggota/`+data.id">Edit</router-link>
            <button class="button-delete" role="button" @click="hapusAnggota(data.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';

export default {
  data() {
    return {
      anggota: ref ([])
    };
  },
  mounted() {
    this.getAnggotaList();
  },
  methods: {
    getAnggotaList() {
      axios
          .get('https://nstbooknii.000webhostapp.com/bookstore/selectAnggota.php')
          .then(response => {
            this.anggota = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    hapusAnggota(id) {
      axios
          .delete(`https://nstbooknii.000webhostapp.com/bookstore/deleleteAnggota.php?id=${id}`)
          .then(response => {
            console.log(response.data);
            this.getAnggotaList();
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
};
</script>

<style>
.ListAnggota {
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
}

.justify-content-center {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
}

.button-edit {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(255, 55, 55, 0.493) 0 6px 20px;
  box-sizing: border-box;
  color: #ff0000;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s, -webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  float: left; /* Menambahkan float left */
}

.button-edit:hover {
  box-shadow: #610000 0 0 0 3px, transparent 0 0 0 0;
}

.button-delete {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(0, 255, 64, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: #00ff40;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s, -webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  float: right; /* Menambahkan float right */
}

.button-delete:hover {
  box-shadow: #a6ff00 0 0 0 3px, transparent 0 0 0 0;
}

.button-add {
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(130, 145, 3, 0.555) 0 6px 20px;
  box-sizing: border-box;
  color: #bbff00;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s, -webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  float: right; /* Menambahkan float right */
}

.button-add:hover {
  box-shadow: #15ff00 0 0 0 3px, transparent 0 0 0 0;
}

</style>