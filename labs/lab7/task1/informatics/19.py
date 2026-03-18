x = int(input())

min = x

for i in range(2, x+1):
    if (x % i == 0):
        if(i < min):
            min = i

print(min)