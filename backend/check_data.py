import aiosqlite
import asyncio

DATABASE_NAME = "pet_hotel.db"

async def check_data():
    async with aiosqlite.connect(DATABASE_NAME) as db:
        print("=== Owners ===")
        async with db.execute("SELECT * FROM owners") as cursor:
            owners = await cursor.fetchall()
            for owner in owners:
                print(owner)
        
        print("\n=== Hotels ===")
        async with db.execute("SELECT * FROM hotels") as cursor:
            hotels = await cursor.fetchall()
            for hotel in hotels:
                print(hotel)

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(check_data())
