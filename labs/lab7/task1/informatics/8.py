x = int(input())
while x > 1:
    if x % 2 != 0:
        print("NO")
        break
    x //= 2
else:
    print("YES")
    