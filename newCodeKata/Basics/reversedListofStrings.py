# strings = list(map(str, input().split()))
#done
strings = ["hello", "world"]
result = []
for i in reversed(range(2)):
    result.append(strings[i])
print(*result)
