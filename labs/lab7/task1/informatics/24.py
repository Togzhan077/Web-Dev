n = int(input())
arr = []
count = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in arr:
    if i > 0:
        count += 1
print(count)