s = set()

n = int(input())
for i in range(0, n):
    x = input()
    s.add(x)

count = 0
for i in s:
    count +=1

print(count)