n = int(input())
arr = []
flag = False
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in range(1,n):
    if (arr[i] > 0 and arr[i-1] > 0) or (arr[i] < 0 and arr[i-1] < 0):
        print("YES")
        flag = True
        break
if (flag == False):
    print("NO")
    