// عند تحميل الصفحة
console.log("JavaScript مرتبط بنجاح!");

// عند الضغط على الزر
document.getElementById('welcome-btn').addEventListener('click', function() {
    alert("شكرًا لزيارتك!");
});
const movingText = document.getElementById('مدرسة السلط بن مالك');
let position = 0;
setInterval(() => {
    position += 1;
    movingText.style.transform = `translateX(${position}px)`;
}, 50);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let currentIndex = 0; // المؤشر الحالي للصورة المعروضة

// الوظيفة التي تتحكم في التبديل بين الصور
function showNextSlide() {
    let slides = document.querySelectorAll('.slider img'); // الحصول على جميع الصور
    currentIndex = (currentIndex + 1) % slides.length; // الانتقال للصورة التالية
    let slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // تحريك المعرض
}

// تغيير الصورة كل 3 ثواني
setInterval(showNextSlide, 3000); // 3000 مللي ثانية = 3 ثواني

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

nav a.active {
    background-color: #4caf50;
    color: white;
}
const counters = {
    students: 500,
    teachers: 50,
    achievements: 120,
};

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(counters).forEach((id) => {
        const element = document.getElementById(id);
        let count = 0;
        const target = counters[id];
        const interval = setInterval(() => {
            if (count >= target) clearInterval(interval);
            else {
                count += Math.ceil(target / 100);
                element.innerText = count;
            }
        }, 20);
    });
});
function loadSection(sectionId, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
        });
}
// مثال لاستدعاء القسم عند تحميل الصفحة
loadSection("achievements", "achievements.html");
function changeLanguage(lang) {
    if (lang === "ar") {
        document.body.dir = "rtl";
        document.body.lang = "ar";
        // تحميل النصوص العربية...
    } else {
        document.body.dir = "ltr";
        document.body.lang = "en";
        // تحميل النصوص الإنجليزية...
    }
}
function showCategory(categoryId) {
    // إخفاء جميع الأقسام
    const categories = document.querySelectorAll('.teacher-category');
    categories.forEach(category => {
        category.style.display = 'none';
    });

    // إظهار القسم المحدد
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    } 
