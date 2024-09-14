from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

# Base URL for Sinatra service
SINATRA_URL = "http://sinatra-service:4567/users"

@app.get("/order/{user_id}")
async def get_order(user_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{SINATRA_URL}/{user_id}")
        if response.status_code == 200:
            user_data = response.json()
            return {"order": {"user": user_data, "order_details": "Order details here"}}
        else:
            raise HTTPException(status_code=response.status_code, detail="User not found in User Service")
