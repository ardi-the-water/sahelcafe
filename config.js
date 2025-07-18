// ═══════════════════════════════════════════════════════════════
// تنظیمات منوی دیجیتال کافه - فقط این بخش را تغییر دهید
// ═══════════════════════════════════════════════════════════════

const CAFE_CONFIG = {
    // ═══ اطلاعات کافه ═══
    name: "نام کافه یا رستوران شما",
    welcomeMessage: "خوش آمدید!",
    logo: "", // مسیر لوگو (اختیاری) - مثال: "assets/logo.png"
    
    // ═══ لینک گوگل شیت ═══
    // راهنما: از گوگل شیت خود، File > Share > Publish to web > CSV را انتخاب کنید
    googleSheetURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6PUzQQzzPHFf5-QOpL58JWOFwUTKFzs3vi95mCHJQVB6efWYoMzTCs7wQ9bWRZw7k1OO6_9CuylCl/pub?output=csv',
    
    // ═══ رنگ‌بندی هوشمند ═══
    // با تغییر رنگ اصلی، رنگ هاور، اکتیو و متن به صورت خودکار تنظیم می‌شود.
    colors: {
        primary: "#2c3e50",      // رنگ اصلی: هدر، فوتر و دکمه‌های فعال
        secondary: "#27ae60",    // رنگ ثانویه: قیمت‌ها و جزئیات مهم
        background: "#f8f9fa",   // پس‌زمینه کلی صفحه
        cardBackground: "rgba(255, 255, 255, 0.9)", // پس‌زمینه کارت‌های منو (برای افکت شیشه‌ای از rgba استفاده کنید)
        text: "#333333",         // رنگ متن اصلی
        lightText: "#7f8c8d"     // رنگ متن‌های فرعی (مانند توضیحات)
    },
    
    // ═══ تنظیمات نمایش ═══
    currency: "تومان",          // واحد پول
    showImages: true,           // نمایش تصاویر آیتم‌ها
    showDescription: true,      // نمایش توضیحات آیتم‌ها
    
    // ═══ اطلاعات توسعه‌دهنده ═══
    developer: {
        name: "علی خداکرمی",
        showCredit: true        // نمایش اعتبار توسعه‌دهنده در فوتر
    }
};

// ═══════════════════════════════════════════════════════════════
// توجه: فایل‌های دیگر را تغییر ندهید!
// ═══════════════════════════════════════════════════════════════
