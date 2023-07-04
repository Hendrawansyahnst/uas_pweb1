import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/buku',
      name: 'buku',
      component: () => import('../views/buku.vue')
    },
    {
      path: '/insert-buku',
      name: 'insert',
      component: () => import('../components/Insert/buku.vue')
    },
    {
      path: '/kategori',
      name: 'kategori',
      component: () => import('../views/Kategori.vue')
    },
    {
      path: '/anggota',
      name: 'anggota',
      component: () => import('../views/Anggota.vue')
    },
    {
      path: '/insert-kategori',
      name: 'InsertKategori',
      component: () => import('../components/Insert/Kategori.vue')
    },
    {
      path: '/insert-anggota',
      name: 'InsertAnggota',
      component: () => import('../components/Insert/Anggota.vue')
    },
    {
      path: '/edit-anggota/:id',
      name: 'EditAnggota',
      component: () => import('../components/Insert/UpdateAnggota.vue')
    },
    {
      path: '/edit-buku/:id',
      name: 'EditBuku',
      component: () => import('../components/Insert/UpdateBuku.vue')
    },
    {
      path: '/edit-kategori/:id',
      name: 'EditKategori',
      component: () => import('../components/Insert/UpdateKategori.vue')
    },
    {
      path: '/peminjaman',
      name: 'peminjaman',
      component: () => import('../views/Peminjaman.vue')
    },
    {
      path: '/peminjaman-master',
      name: 'PeminjamanMaster',
      component: () => import('../components/Insert/PeminjamanMaster.vue')
    },
    {
      path: '/detail-pinjaman/:id',
      name: 'PeminjamanDetail',
      component: () => import('../views/PeminjamanDetail.vue')
    }
  ]
})

export default router