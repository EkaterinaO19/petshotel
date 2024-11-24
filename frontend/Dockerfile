# Dockerfile для Next.js (dev)
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем TypeScript глобально
RUN npm install -g typescript

# Копируем файлы проекта, включая папку src/app
COPY ./src ./src

# Открываем порт для Next.js
EXPOSE 3000

# Запускаем Next.js в режиме разработки
CMD ["npm", "run", "dev"]


