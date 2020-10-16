export interface Item{
    id: string;
    nama: string;
    jenis: string;
    foto: string;
    merek: string;
    harga: number;
    stok: number;
    deskripsi: {
        baseClock: string;
        boostClock: string;
        jumlahCore: string;
        thread: string;
        speed: string;
        ukuran: string;
        pcs: string;
        chipset: string;
        compatible: string;
    };
    
}
