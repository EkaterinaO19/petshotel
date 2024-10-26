import asyncio
import aiosqlite

async def initialize_db():
    async with aiosqlite.connect('pet_boarding.db') as db:
        await db.execute('''
            CREATE TABLE IF NOT EXISTS owners (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                surname TEXT,
                email TEXT,
                phone TEXT
            )
        ''')
        
        await db.execute('''
            CREATE TABLE IF NOT EXISTS pets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                owner_id INTEGER,
                name TEXT,
                chip_id TEXT,
                species TEXT,
                age INTEGER,
                breed TEXT,
                gender TEXT,
                FOREIGN KEY (owner_id) REFERENCES owners (id)
            )
        ''')

        await db.execute('''
            CREATE TABLE IF NOT EXISTS hotels (
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
            )
        ''')

        await db.commit()
        print("База данных и таблицы успешно созданы!")

if __name__ == "__main__":
    asyncio.run(initialize_db())
