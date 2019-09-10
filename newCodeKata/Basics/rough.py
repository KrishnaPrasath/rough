# strings = list(map(str, input().split()))

string = ["Hello", "World"]
result = []
for item in string:
    temp = ""
    for i in reversed(range(len(item))):
        temp += item[i]

    result.append(temp)
print(*result)
