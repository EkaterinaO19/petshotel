# database.py
import aiosqlite

DATABASE_NAME = "pet_hotel.db"

# Функция для подключения к базе данных
async def get_db_connection():
    conn = await aiosqlite.connect(DATABASE_NAME)
    # Set row factory to return rows as dictionaries
    conn.row_factory = aiosqlite.Row
    return conn

# Функция для создания таблиц
async def create_tables():
    async with aiosqlite.connect(DATABASE_NAME) as db:
        # Создание таблиц
        await db.execute('''CREATE TABLE IF NOT EXISTS owners (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT,
                            surname TEXT,
                            email TEXT,
                            phone TEXT
                            )''')
        await db.execute('''CREATE TABLE IF NOT EXISTS pets (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT,
                            chip_id TEXT,
                            species TEXT,
                            age INTEGER,
                            breed TEXT,
                            gender TEXT,
                            owner_id INTEGER,
                            FOREIGN KEY (owner_id) REFERENCES owners (id)
                            )''')
        await db.execute('''CREATE TABLE IF NOT EXISTS hotels (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT,
                            phone TEXT,
                            hotel_owner_name TEXT,
                            hotel_owner_surname TEXT,
                            location TEXT,
                            conditions TEXT,
                            animal_types TEXT,
                            price_per_day REAL,
                            photos TEXT,
                            rating REAL
                            )''')
        await db.commit()

# Пример функции вставки данных в таблицу
async def insert_owner(owner_data):
    async with aiosqlite.connect(DATABASE_NAME) as db:
        cursor = await db.execute(
            "INSERT INTO owners (name, surname, email, phone) VALUES (?, ?, ?, ?)",
            (owner_data['name'], owner_data['surname'], owner_data['email'], owner_data['phone'])
        )
        await db.commit()
        return cursor.lastrowid  # Возвращает ID вставленного владельца

async def insert_hotel(hotel_data):
    async with aiosqlite.connect(DATABASE_NAME) as db:
        cursor = await db.execute(
            "INSERT INTO hotels (name, phone, hotel_owner_name, hotel_owner_surname, location, conditions, animal_types, price_per_day, photos, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (hotel_data['name'], hotel_data['phone'], hotel_data['hotel_owner_name'], hotel_data['hotel_owner_surname'], hotel_data['location'], hotel_data['conditions'], ','.join(hotel_data['animal_types']), hotel_data['price_per_day'], ','.join(hotel_data['photos']), hotel_data['rating'])
        )
        await db.commit()
        return cursor.lastrowid  # Возвращает ID гостиницы

    
async def delete_hotel(hotel_id: int):
    conn = await get_db_connection()
    try:
        cursor = await conn.execute("DELETE FROM hotels WHERE id = ?", (hotel_id,))
        await conn.commit()
        return cursor.rowcount  # Return the number of deleted rows
    finally:
        await conn.close()    