# from fastapi import FastAPI, Request

# app = FastAPI()

# @app.middleware("http")
# async def addcors(request: Request, call_next):
#     response = await call_next(request)
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     response.headers["Access-Control-Allow-Credentials"] = "true"
#     response.headers["Access-Control-Allow-Methods"] = "*"
#     response.headers["Access-Control-Allow-Headers"] = "*"
#     return response

# @app.get("/api/python")
# def hello_world():
#     return {"message": "Hello World",
#             "version": "1.0"}

# @app.get("/api/list")
# def liste():
#     return {"liste": ["Apfel", "Banane", "Birne", "Ananas", "Mango", "Orange"]}

# @app.get("/api/add")
# def addiere(a: int, b: int):
#     return {"sum": a+b}
# Пример: https://shubinapp.vercel.app/
# Пример: https://nextjs-fastapi-starter-42wwgdu29-volodymyrshubin2001s-projects.vercel.app/
import uvicorn
from fastapi import FastAPI, Query
from pyproj import Transformer

app = FastAPI()

# Создаем функцию для преобразования координат из LV95 в WGS84
def lv95_to_wgs84(lng: float, lat: float):
    transformer = Transformer.from_crs("EPSG:2056", "EPSG:4326", always_xy=True)
    wgs84_lng, wgs84_lat = transformer.transform(lng, lat)
    return {"wgs84_lng": wgs84_lng, "wgs84_lat": wgs84_lat}

# Создаем функцию для преобразования координат из WGS84 в LV95
def wgs84_to_lv95(lng: float, lat: float):
    transformer = Transformer.from_crs("EPSG:4326", "EPSG:2056", always_xy=True)
    lv95_lng, lv95_lat = transformer.transform(lng, lat)
    return {"lv95_lng": lv95_lng, "lv95_lat": lv95_lat}

# Определяем эндпоинты для обоих преобразований
@app.get("/api/wgs84lv95")
async def wgs84_lv95(lng: float = Query(..., description="Долгота в формате LV95"), lat: float = Query(..., description="Широта в формате LV95")):
    return lv95_to_wgs84(lng, lat)

@app.get("/api/lv95wgs84")
async def lv95_wgs84(lng: float = Query(..., description="Долгота в формате WGS84"), lat: float = Query(..., description="Широта в формате WGS84")):
    return wgs84_to_lv95(lng, lat)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

