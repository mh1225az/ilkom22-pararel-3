// Ambil elemen yang diperlukan
const editProfileBtn = document.getElementById("edit-profile-btn");
const coursesMessage = document.getElementById("courses-message");

// Tambahkan event listener untuk tombol Edit Profil
editProfileBtn.addEventListener("click", () => {
    alert("Edit Profil feature coming soon!");
});

// Contoh: Ubah pesan kursus jika data sudah tersedia (simulasi)
let courses = []; // Array kursus kosong (simulasi)

if (courses.length === 0) {
    coursesMessage.textContent = "No Courses Has Been Used / Purchased";
} else {
    coursesMessage.textContent = `You have ${courses.length} course(s).`;
}