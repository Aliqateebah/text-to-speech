// الحصول على عناصر الصفحة
const speakButton = document.getElementById('speak-button');
const textInput = document.getElementById('text-input');

// تفعيل تحويل النص إلى صوت عند الضغط على الزر
speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();

    if (text === "") {
        alert("يرجى إدخال نص لتحويله إلى صوت");
        return;
    }

    const speechSynthesis = window.speechSynthesis;

    // التأكد من أن الـ API تدعم الصوت
    if (speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';  // تعيين اللغة للعربية

        // تشغيل الصوت
        speechSynthesis.speak(utterance);
    } else {
        alert("هذه الميزة غير مدعومة في متصفحك.");
    }
});
