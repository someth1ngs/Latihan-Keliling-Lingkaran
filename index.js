const phi = 3.14;
let kelilingLingkaran = Number(window.prompt("Masukkan nilai jari-jari lingkaran:"));

if (!isNaN(kelilingLingkaran) && kelilingLingkaran > 0) {
    let keliling = 2 * phi * kelilingLingkaran;
    window.alert(`Keliling lingkaran dengan jari-jari ${kelilingLingkaran} adalah ${keliling}`);
} else {
    window.alert("Input tidak valid. Masukkan nilai jari-jari lingkaran yang valid.");
}