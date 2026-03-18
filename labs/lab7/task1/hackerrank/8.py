def split_join(a):
    a = a.split(" ")
    a = "-".join(a)
    return a


line = input()
result = split_join(line)
print(result)