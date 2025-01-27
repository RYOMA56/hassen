// تسجيل الدخول
document.getElementById("login-button").addEventListener("click", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("login-message").innerHTML = "تم تسجيل الدخول بنجاح!";
        setTimeout(() => {
            window.location.href = "index.html"; // الانتقال إلى الصفحة الرئيسية بعد النجاح
        }, 2000);
    } else {
        document.getElementById("login-message").innerHTML = "يرجى إدخال جميع البيانات!";
        document.getElementById("login-message").style.color = "red";
    }
});

// الانتقالات السلسة عند التنقل بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// فتح نافذة منبثقة
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// التأثيرات عند التمرير
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        let position = section.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.classList.add('fadeIn');
        } else {
            section.classList.remove('fadeIn');
        }
    });
});
