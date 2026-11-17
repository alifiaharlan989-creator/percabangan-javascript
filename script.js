function mulaiCerita() {
    // Konfirmasi memulai game menggunakan confirm()
    let siap = confirm("Apakah kamu siap memulai percakapan 'TENTANG DEWI'?");
    if (!siap) {
        alert("Percakapan dibatalkan.");
        return;
    }

    // --- DIALOG PEMBUKA ---
    alert("Cewek: Yang");
    alert("Cewek: Tadi kan aku ngeliatin Dewi lewat");
    alert("Cewek: Tau gak?");
    alert("Cowok (Kamu): Kenapa?");
    alert("Cewek: Ih amit-amit dah");
    alert("Cewek: Dia pake bulu mata");
    alert("Cewek: Aku juga suka bingung deh");
    alert("Cewek: Sama cewek kayak gitu");
    alert("Cewek: Muka pas-pasan aja, gak ngaca apa");

    // --- PERCABANGAN 1 (Pilihan Player L1) ---
    let pilihan1 = prompt(
        "Pilih respon kamu (ketik angka 1, 2, atau 3):\n" +
        "1. Wkwkwk kamu juga bukannya\n" +
        "2. (Diam saja / ...)\n" +
        "3. Yah kamu ngapain ngurusin orang"
    );

    if (pilihan1 === "1") {
        alert("Cowok (Kamu): Wkwkwk kamu juga bukannya");
        alert("Cewek: Aku mah beda sama dia");
        lanjutJalurKesal();
    } else if (pilihan1 === "2") {
        alert("Cowok (Kamu): ...");
        lanjutJalurKesal();
    } else if (pilihan1 === "3") {
        alert("Cowok (Kamu): Yah kamu ngapain ngurusin orang");
        alert("Cewek: Abis dia tuh centil tau, yang");
        lanjutJalurKesal();
    } else {
        alert("Pilihan tidak valid! Silakan mulai ulang dan ketik angka 1, 2, atau 3.");
    }
}

// Fungsi lanjutan alur percakapan setelah Percabangan 1
function lanjutJalurKesal() {
    alert("Cewek: Aku paling kesel deh liat cewek");
    alert("Cewek: Udah kegatelan");
    alert("Cewek: Merasa paling cantik");

    // --- PERCABANGAN 2 (Pilihan Player L1) ---
    let pilihan2 = prompt(
        "Pilih respon kamu (ketik angka 1, 2, atau 3):\n" +
        "1. (Diam saja / ...)\n" +
        "2. Ya udah lah orang lain ini\n" +
        "3. Iya, dia suka aku liat begitu"
    );

    // ==========================================
    // CABANG 1: JALUR SOFTLENS & BURUNG ONTA
    // ==========================================
    if (pilihan2 === "1") {
        alert("Cowok (Kamu): ...");
        alert("Cewek: Mana pake softlens lagi");
        alert("Cewek: Yang warna item");
        alert("Cewek: Biar dikira unyu kali");
        alert("Cewek: Padahal udah kayak burung onta");

        // --- PERCABANGAN 3A (Pilihan Player L1) ---
        let pilihan3A = prompt(
            "Pilih respon kamu (ketik angka 1, 2, atau 3):\n" +
            "1. Ya udah orang lain ini\n" +
            "2. Iya dia suka liat aku begitu (Lompat ke L2)\n" +
            "3. (Diam saja / ...)"
        );

        if (pilihan3A === "1") {
            alert("Cowok (Kamu): Ya udah orang lain ini");
            masukConnectorL1(); // Masuk ke dialog L1
        } else if (pilihan3A === "2") {
            alert("Cowok (Kamu): Iya dia suka liat aku begitu");
            masukConnectorL2(); // Masuk ke dialog L2
        } else if (pilihan3A === "3") {
            alert("Cowok (Kamu): ...");
            alert("Cewek: Aku juga pernah tuh");
            alert("Cewek: Liat dia jalan sama si Iqbal ke Dufan");
            alert("Cewek: Cowoknya gak tau yang!");
            alert("Cewek: Aku mah gak bakalan gitu");
            alert("Cewek: Yang!!");
            alert("Cewek: Kamu dengerin aku ngomong gak sih?");

            // --- PERCABANGAN 4 (Pilihan Player L1 - Penentu Happy End) ---
            let pilihan4 = prompt(
                "Pilih respon kamu (ketik angka 1, 2, atau 3):\n" +
                "1. (Diam saja / ...)\n" +
                "2. Kamu ngomongin orang terus\n" +
                "3. Iya denger kok"
            );

            if (pilihan4 === "1") {
                alert("Cowok (Kamu): ...");
                masukConnectorL4(); // Masuk ke L4 -> Critical Bad End
            } else if (pilihan4 === "2") {
                alert("Cowok (Kamu): Kamu ngomongin orang terus");
                masukConnectorL4(); // Masuk ke L4 -> Critical Bad End
            } else if (pilihan4 === "3") {
                alert("Cowok (Kamu): Iya denger kok");
                alert("Cewek: Hmm...");
                alert("Cowok (Kamu): Pulang lah yuk");
                alert("Cewek: Ayukkk");
                alert("?? ENDING 1 (SAFE / HAPPY END): SELAMET! Kamu berhasil ngajak pulang bareng.");
            } else {
                alert("Pilihan tidak valid!");
            }
        } else {
            alert("Pilihan tidak valid!");
        }

    // ==========================================
    // CABANG 2: LANGSUNG KE CONNECTOR L1
    // ==========================================
    } else if (pilihan2 === "2") {
        alert("Cowok (Kamu): Ya udah lah orang lain ini");
        masukConnectorL1();

    // ==========================================
    // CABANG 3: JALUR SALAH JAWAB SOAL LIATIN DEWI
    // ==========================================
    } else if (pilihan2 === "3") {
        alert("Cowok (Kamu): Iya, dia suka aku liat begitu");
        masukConnectorL2();
    } else {
        alert("Pilihan tidak valid!");
    }
}

// --- CONNECTOR L1 (Menuju L3 / Percabangan Ngobrol) ---
function masukConnectorL1() {
    alert("Cewek: Tapi dia tuh ya");
    alert("Cewek: Kebangetan orangnya");
    alert("Cowok (Kamu): Ya udah jangan ngomongin orang terus");
    masukConnectorL3();
}

// --- CONNECTOR L2 (Jalur Cemburu -> Putus atau L3) ---
function masukConnectorL2() {
    alert("Cewek: OOHHH!!");
    alert("Cewek: Jadi kamu suka liatin dia??!!");
    alert("Cowok (Kamu): Loh bukan itu maksudku");
    alert("Cewek: Ya udah liatin dia aja sampe puas!");

    // --- PERCABANGAN 3B (Pilihan Player L1) ---
    let pilihan3B = prompt(
        "Pilih respon kamu (ketik angka 1 atau 2):\n" +
        "1. Bener ya, aku liatin\n" +
        "2. Iya udah. Jangan ngomongin orang terus"
    );

    if (pilihan3B === "1") {
        alert("Cowok (Kamu): Bener ya, aku liatin");
        alert("Cewek: Oh boleh-boleh. Boleh banget !!");
        alert("?? ENDING 2 (BAD END): ABIS TUH PUTUS!");
    } else if (pilihan3B === "2") {
        alert("Cowok (Kamu): Iya udah. Jangan ngomongin orang terus");
        masukConnectorL3();
    } else {
        alert("Pilihan tidak valid!");
    }
}

// --- CONNECTOR L3 (Perdebatan Inti) ---
function masukConnectorL3() {
    alert("Cewek: Kamu kok gak ngerti banget sih");
    alert("Cewek: Aku kan pengen ngobrol sama kamu");

    // --- PERCABANGAN 3C (Pilihan Player L1) ---
    let pilihan3C = prompt(
        "Pilih respon kamu (ketik angka 1 atau 2):\n" +
        "1. Iya tapi jangan ngomongin orang lah\n" +
        "2. Iya, dia ini bukan kamu"
    );

    if (pilihan3C === "1") {
        alert("Cowok (Kamu): Iya tapi jangan ngomongin orang lah");
        masukConnectorL4();
    } else if (pilihan3C === "2") {
        alert("Cowok (Kamu): Iya, dia ini bukan kamu");
        masukConnectorL4();
    } else {
        alert("Pilihan tidak valid!");
    }
}

// --- CONNECTOR L4 (Critical Bad End) ---
function masukConnectorL4() {
    alert("Cewek: Udah ah!");
    alert("Cewek: Kita gak usah ngobrol lagi");
    alert("?? ENDING 3 (CRITICAL BAD END / SAD END): Mereka gak ngobrol lagi selamanya...");
}