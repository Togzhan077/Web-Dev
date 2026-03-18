class Vehicle:
    def __init__(self, brand, year, color):
        self.brand = brand
        self.year = year
        self.color = color

    def move(self):
        return f"{self.brand} vehicle is moving."
    
    def setColor(self, color):
        self.color = color

    def __str__(self):
        return f"{self.brand} ({self.year}) - color: {self.color}."
    
class Sedan(Vehicle):
    def __init__(self, brand, year, color, max_speed):
        super().__init__(brand, year, color)
        self.max_speed = max_speed

    def speed(self):
        return f"{self.brand} sedan can reach speed of {self.max_speed} km/h!"
    
    def move(self):
        return f"{self.brand} sedan is driving on asphalt road."
    
class SUV(Vehicle):
    def __init__(self, brand, year, color, capacity):
        super().__init__(brand, year, color)
        self.capacity = capacity

    def size(self):
        return f"{self.brand} suv can fit {self.capacity} people!"
    
    def move(self):
        return f"{self.brand} suv can drive on any roads."