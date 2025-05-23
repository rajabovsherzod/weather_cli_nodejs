# Weather-CLI 🌤️

## Loyiha haqida 📋

Weather-CLI - ob-havo ma'lumotlarini terminal orqali olish imkonini beruvchi qulay va sodda dastur. Foydalanuvchilar terminal orqali o'z shaxarlari uchun joriy ob-havo ma'lumotlarini tezda olishlari mumkin.

## O'rnatish 💻

```bash
# Repozitoriyani klonlash
git clone https://github.com/rajabovsherzod/weather_cli_nodejs.git

# Loyiha katalogiga kirish
cd weather-cli

# Kerakli paketlarni o'rnatish
npm install

# Global o'rnatish uchun (ixtiyoriy)
npm install -g .
```

## Foydalanish 🚀

Dasturni ishlatish uchun quyidagi buyruqlardan foydalanishingiz mumkin:

```bash
# API token saqlash (https://openweathermap.org saytidan olishingiz mumkin)
node index.js -t [API_TOKEN]

# Shahar nomini saqlash
node index.js -s [SHAHAR_NOMI]

# Ob-havo ma'lumotlarini ko'rish
node index.js

# Yordam ko'rsatish
node index.js -h
```

## Imkoniyatlar ✨

- 🌤️ Ob-havo ma'lumotlarini real vaqtda olish
- 🏙️ Istalgan shahar uchun ob-havo bashoratini ko'rish
- 🔑 API tokeni saqlash 
- 📱 Qulay va sodda terminal interfeysi
- 🎨 Ranglar va maxsus belgilar orqali chiroyli ma'lumot taqdimoti

## Texnologiyalar 🛠️

- **Node.js**
- **JavaScript** (ES modules)
- **Axios** (HTTP so'rovlari uchun)
- **Chalk** (terminal ranglarini qo'llab-quvvatlash uchun)
- **OpenWeatherMap API**

## Dastur tuzilishi 📁

```
weather-cli/
├── helpers/
│   └── args.js              # Buyruq satrini tahlil qilish uchun
├── services/
│   ├── api.service.js       # OpenWeatherMap API bilan ishlash
│   ├── log.service.js       # Terminalda ma'lumotlarni ko'rsatish
│   └── storage.service.js   # Ma'lumotlarni saqlash va olish
├── index.js                 # Asosiy dastur fayli
├── package.json             # Loyiha ma'lumotlari va bog'liqliklar
└── README.md                # Loyiha haqida ma'lumot
```

## API haqida 🔌

Bu loyiha [OpenWeatherMap API](https://openweathermap.org/api) dan foydalanadi. API dan foydalanish uchun ro'yxatdan o'tib, shaxsiy token olishingiz kerak.

## Litsenziya 📄

ISC

## Muallif haqida 👨‍💻

Loyiha muallifi: [Sherzod Rajabov](https://github.com/rajabovsherzod)

