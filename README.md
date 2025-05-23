# React Data Fetcher

Цей проект демонструє асинхронне отримання даних в React за допомогою хука useEffect та бібліотеки axios.

## Опис проекту

React Data Fetcher - це простий додаток, який демонструє основи асинхронного програмування в React:
- Використання хука useEffect для ініціювання запитів до сервера
- Використання axios для виконання HTTP-запитів
- Обробка різних станів при роботі з API (завантаження, помилки, успішні відповіді)
- Відображення отриманих даних у компоненті
- Рефетч даних при зміні параметрів

Додаток використовує [JSONPlaceholder](https://jsonplaceholder.typicode.com/) для отримання даних користувачів.

## Встановлення та запуск

1. Клонуйте репозиторій:
```
git clone https://github.com/your-username/react-data-fetcher.git
cd react-data-fetcher
```

2. Встановіть залежності:
```
npm install
```

3. Запустіть додаток у режимі розробки:
```
npm run dev
```

4. Відкрийте браузер і перейдіть за адресою, вказаною у консолі (зазвичай http://localhost:5173)

## Структура проекту

```
my-react-app/
├── src/
│   ├── components/
│   │   └── DataFetcher.jsx  # Компонент для отримання даних
│   ├── App.jsx              # Головний компонент додатку
│   ├── App.css              # Стилі для App компонента
│   ├── main.jsx             # Точка входу
│   └── index.css            # Глобальні стилі
├── index.html               # HTML шаблон
├── vite.config.js           # Конфігурація Vite
├── package.json             # Залежності проекту
└── README.md                # Документація
```

## Технології

- React 18
- Vite
- Axios
- JSONPlaceholder API

## Функціональність

- Отримання даних з API
- Відображення стану завантаження
- Обробка та відображення помилок
- Перезавантаження даних при зміні ID ресурсу
- Відображення різних типів даних (масиви, об'єкти)
