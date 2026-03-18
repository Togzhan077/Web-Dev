n = int(input())
arr = []
count = 0
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in range(1,n):
    if arr[i] > arr[i-1]:
        count += 1
print(count)