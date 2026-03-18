s1 = set()
s2 = set()

n = int(input())
for i in range(0, n):
    x = int(input())
    s1.add(x)

b = int(input())
for i in range(0, b):
    x = int(input())
    s2.add(x)

s3 = s1.union(s2)
count = 0

for i in s3:
    count += 1

print(count)