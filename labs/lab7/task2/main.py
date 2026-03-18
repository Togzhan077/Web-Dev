from models import Vehicle, Sedan, SUV

car1 = Sedan("Toyota", 2012, "White", 180)
car2 = SUV("Lincoln", 2025, "Black", 8)
car3 = Vehicle("Lada", 2000, "Perple")

vehicle = [car1, car2, car3]

for v in vehicle:
    print(v)
    print(v.move())

print(car1.speed())
print(car2.size())
car3.setColor("Blue")
print(car3.color)