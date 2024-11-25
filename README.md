
# PetShotel Project

PetShotel — это веб-приложение для бронирования услуг по размещению домашних животных в отелях и на домашних базах. Это приложение состоит из фронтенда на Next.js, бэкенда на FastAPI и базы данных SQLite.

## Стек технологий

- **Frontend**: Next.js, TypeScript, React
- **Backend**: FastAPI, Python, SQLite (через aiosqlite)
- **База данных**: SQLite
- **Контейнеризация**: Docker, Docker Compose

## Установка и запуск

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/yourusername/petshotel.git
cd petshotel
```

### 2. Установите Docker и Docker Compose

Для работы с проектом требуется Docker и Docker Compose. Убедитесь, что они установлены на вашем компьютере:

- [Скачать Docker](https://www.docker.com/products/docker-desktop)
- [Установить Docker Compose](https://docs.docker.com/compose/install/)

### 3. Запуск приложения с помощью Docker

В проекте настроен `docker-compose.yml`, который автоматически собирает и запускает контейнеры для фронтенда, бэкенда и базы данных.

```bash
docker-compose up --build
```

Эта команда выполнит следующие действия:
- Скачает все необходимые образы Docker.
- Построит и запустит контейнеры для бэкенда, фронтенда и базы данных.

### 4. Доступ к приложению

После того как контейнеры запустятся, вы сможете получить доступ к следующим частям приложения:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:8000](http://localhost:8000) (FastAPI)

### 5. Остановка приложения

Для остановки всех контейнеров используйте команду:

```bash
docker-compose down
```

### 6. Разработка

Чтобы начать работать с проектом в режиме разработки:

1. Склонируйте репозиторий и установите все зависимости:
   ```bash
   cd petshotel/frontend
   npm install
   ```

2. Запустите фронтенд в режиме разработки:
   ```bash
   npm run dev
   ```

Фронтенд будет доступен по адресу [http://localhost:3000](http://localhost:3000).

Для бэкенда в Docker будет автоматически установлен режим разработки.

### 7. Структура проекта

```
.
├── backend/              # Бэкенд приложение на FastAPI
├── frontend/             # Фронтенд приложение на Next.js
├── docker-compose.yml    # Конфигурация для Docker
├── Dockerfile            # Dockerfile для фронтенда и бэкенда
├── README.md             # Этот файл
└── .env                  # Файл для переменных окружения (не обязателен)
```

### 8. Примечания

- База данных (SQLite) хранится в файле `pet_hotel.db` в папке `backend`.
- Если вам нужно настроить другие переменные окружения, создайте файл `.env` в корне проекта и укажите параметры, такие как ключи JWT для бэкенда.

---

### Пример `.env` файла (если нужен):

```bash
DATABASE_URL=sqlite:///./backend/pet_hotel.db
JWT_SECRET_KEY=your_jwt_secret_key
```

---

## Лицензия

Этот проект использует лицензию MIT. Подробности можно найти в файле LICENSE.
