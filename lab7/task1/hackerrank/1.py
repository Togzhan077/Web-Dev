n = int(input())
i = 0
arr = []

while i < n:
    x = input()
    arr1 = x.split(" ")
    if arr1[0].lower() == "append":
        arr.append(int(arr1[1]))
    elif arr1[0].lower() == "insert":
        arr.insert(int(arr1[1]), int(arr1[2]))
    elif arr1[0].lower() == "sort":
        arr.sort()
    elif arr1[0].lower() == "remove":
        arr.remove(int(arr1[1]))
    elif arr1[0].lower() == "pop":
        arr.pop()
    elif arr1[0].lower() == "reverse":
        arr.reverse()
    elif arr1[0].lower() == "print":
        print(arr)

    i += 1