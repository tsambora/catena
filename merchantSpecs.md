# Dokumen Spesifikasi SDK CATENA

Dokumen ini berisi spesifikasi SDK CATENA dan panduan untuk integrasi merchant.

Spesifikasi ini akan memandu anda untuk mengimplemen Catena dalam aplikasi point-of-sale (POS) berbasis web anda. Gambar-gambar di bawah menunjukan pop-up pembayaran yang telah diintegrasikan dengan POS seorang merchant.

![](https://i.imgur.com/iJW6Kvs.png)

![](https://i.imgur.com/HWcOGSD.png)

## Ikhtisar
Ada dua cara untuk mengintegrasikan pop-up pembayaran CATENA ke point of sale berbasis web anda:

1. Menggunakan CATENA sebagai kelas Javascript
2. Menggunakan CATENA sebagai React Component

Sebelum mengintegrasikan SDK CATENA, anda harus mengunduh blockchain ledger CATENA. SDK tidak dapat digunakan sebelum merchant memiliki blockchain yang terbaru.

## Menggunakan CATENA sebagai kelas Javascript
Anda dapat mengintegrasi CATENA dengan mengimport SDK CATENA dan memanggil fungsi pop-up pembayaran di suatu tempat di kode pembayaran POS anda.

Import SDK CATENA dengan menambah script tag di bawah dalam HTML head POS anda:
```
<script type="text/javascript" src="cdn.catena.com/merchant/catenaSdkV1.js"></script>
```

Setelah diimport, anda dapat memanggil fungsi `Catena.init()` untuk mengeluarkan pop-up pembayaran CATENA. Fungsi ini mengambil dua parameter:
```
Catena.init(blockChainDir, merchantId);
```
`blockChainDir` adalah directory blockchain ledger CATENA dalam komputer anda.
`merchantId` adalah merchant id CATENA anda.

Memanggil `Catena.init()` akan membuat pop-up pembayaran CATENA muncul.

![](https://i.imgur.com/iJW6Kvs.png)

Proses pembayaran selanjutnya kan dilakukan oleh SDK Catena di belakang layar, diantaranya yang dilakukan SDK adalah memverifikasi transaksi di blockchain dan menampilkan UI apabila pembayaran berhasil atau gagal.

## Menggunakan CATENA sebagai React Component
Apabila point of sale aplikasi merchant anda adalah aplikasi React, anda dapat mengintegrasi CATENA dengan menggunakan React Component CATENA

Import SDK CATENA dengan menambah script tag di bawah dalam HTML head POS anda:
```
<script type="text/javascript" src="cdn.catena.com/merchant/catenaSdkV1.js"></script>
```

Dalam halaman pembayaran, import React Component CATENA
```
import CatenaInitModal from `Catena`;
```

kemudian masukkan komponen tersebut ke fungsi render halaman anda, bersama logic untuk kapan komponen tersebut harus muncul, sebagai contoh:
```
{
    this.state.showCatenaInitModal ?
        <CatenaInitModal
            blockChainDir="foo"
            merchantId="bar"
        : null
}
```

Menambahkan `<CatenaInitModal />` ke fungsi render halaman pembayaran akan mengeluarkan pop-up pembayaran CATENA.

![](https://i.imgur.com/iJW6Kvs.png)

Proses pembayaran selanjutnya kan dilakukan oleh SDK Catena di belakang layar, diantaranya yang dilakukan SDK adalah memverifikasi transaksi di blockchain dan menampilkan UI apabila pembayaran berhasil atau gagal.
