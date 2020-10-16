import { Injectable } from '@angular/core';
import {Item} from './item.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  displayItems = [];
  private items: Item[] = [
    {
      id: '01',
      nama: 'G.SKILL Trident Z Royal F4-4600C18D-16GTRG',
      jenis: 'RAM',
      foto: 'https://www.gskill.com/_upload/images/1908130949151.png',
      merek: 'G.SKILL',
      harga:  1999000,
      stok: 10,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '4600 Mhz',
        ukuran: '16 GB',
        pcs: '2x8 GB',
        chipset: '',
        compatible: '',
      },
    },
    {
      id: '02',
      nama: 'Corsair Vengeance LPX',
      jenis: 'RAM',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/3/2678891/2678891_11ffe968-5a6c-4dd1-85bb-000d822e8117_900_900.jpg',
      merek: 'Corsair',
      harga:  2100000,
      stok: 50,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '2666 Mhz',
        ukuran: '32 GB',
        pcs: '2x16 GB',
        chipset: '',
        compatible: '',
      },
    },
    {
      id: '03',
      nama: 'ASUS TUF GAMING X570-PLUS',
      jenis: 'Motherboard',
      foto: 'https://www.asus.com/media/global/products/i8494vnng05ywle1/P_setting_000_1_90_end_500.png',
      merek: 'ASUS',
      harga:  4000000,
      stok: 5,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: 'AM4',
        compatible: 'AMD',
      },
    },
    {
      id: '04',
      nama: 'AMD Ryzen 9 3950X',
      jenis: 'CPU',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/7122uH4-hfL._AC_SL1121_.jpg',
      merek: 'AMD',
      harga:  12299000,
      stok: 20,
      deskripsi: {
        baseClock: '3.5 Ghz',
        boostClock: '4.7 Ghz',
        jumlahCore: '16',
        thread: '32',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: '',
        compatible: '',
      },
    },
    {
      id: '05',
      nama: 'ZOTAC GAMING GeForce RTX 3090 Trinity',
      jenis: 'GPU',
      foto: 'https://www.tweaktown.com/images/news/7/4/74814_302_say-hello-to-zotacs-new-geforce-rtx-3090-trinity-graphics-card_full.jpg',
      merek: 'ZOTAC',
      harga:  29000000,
      stok: 13,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: '',
        compatible: '',
      },
    },
    {
      id: '06',
      nama: 'Asus ROG Maximus XII Apex',
      jenis: 'Motherboard',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/61597G3IXVL._AC_SL1000_.jpg',
      merek: 'ASUS',
      harga:  7000000,
      stok: 50,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: 'LGA1200',
        compatible: 'Intel',
      },
    },
    {
      id: '07',
      nama: 'Asus TUF RTX 3090 24G GAMING',
      jenis: 'ASUS',
      foto: 'https://www.asus.com/media/global/products/xcauto1ez9mxpzuv/P_setting_000_1_90_end_500.png',
      merek: 'ZOTAC',
      harga:  35000000,
      stok: 1,
      deskripsi: {
        baseClock: '',
        boostClock: '',
        jumlahCore: '',
        thread: '',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: '',
        compatible: '',
      },
    },
    {
      id: '08',
      nama: 'Intel Core i9-10900K',
      jenis: 'CPU',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/61aMmen0cFL._AC_SL1099_.jpg',
      merek: 'AMD',
      harga:  9599000,
      stok: 25,
      deskripsi: {
        baseClock: '3.7 Ghz',
        boostClock: '45.3 Ghz',
        jumlahCore: '10',
        thread: '20',
        speed: '',
        ukuran: '',
        pcs: '',
        chipset: '',
        compatible: '',
      },
    },

  ];

  constructor() { }

  getAllItems(){
    return [...this.items];
  }

  getDisplayItems(){
    this.displayItems = [];
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.items.length; i++){
      if (this.items[i].stok > 0){
        this.displayItems[j] = this.items[i];
        j++;
      }
    }
    return [...this.displayItems];
  }

  getItem(itemId){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length; i++){
      if (this.items[i].id === itemId){
        return this.items[i];
      }
    }
  }

  deleteItem(itemId){
    this.items = this.items.filter(item => {
      return item.id !== itemId;
    });
  }

  addItem(itemId, data: FormGroup){
    const newItemId = itemId + 1;
    const pushData = {
      id: newItemId.toString(),
      nama: data.value.name,
      jenis: data.value.jenis,
      foto: data.value.foto,
      merek: data.value.merek,
      harga: data.value.harga,
      stok: data.value.stok,
      deskripsi: {
        baseClock: data.value.baseClock,
        boostClock: data.value.boostClock,
        jumlahCore: data.value.core,
        thread: data.value.thread,
        speed: data.value.speed,
        ukuran: data.value.ukuran,
        pcs: data.value.pcs,
        chipset: data.value.chipset,
        compatible: data.value.compatible
      },
    };

    this.items.push(pushData);
  }

  editItem(id,
           foto,
           nama,
           harga,
           stok,
           baseClock,
           boostClock,
           jumlahCore,
           thread,
           speed,
           ukuran,
           pcs,
           chipset,
           compatible){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length; i++){
      if (this.items[i].id === id){
        this.items[i].nama = nama;
        this.items[i].foto = foto;
        this.items[i].stok = stok;
        this.items[i].harga = harga;
        this.items[i].deskripsi.baseClock = baseClock;
        this.items[i].deskripsi.boostClock = boostClock;
        this.items[i].deskripsi.jumlahCore = jumlahCore;
        this.items[i].deskripsi.thread = thread;
        this.items[i].deskripsi.speed = speed;
        this.items[i].deskripsi.ukuran = ukuran;
        this.items[i].deskripsi.pcs = pcs;
        this.items[i].deskripsi.chipset = chipset;
        this.items[i].deskripsi.compatible = compatible;
      }
    }

  }
}
