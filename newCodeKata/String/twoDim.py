N = 5
arr = [[0 for x in range(N)] for x in range(N)]
string = "WELCOMETOGUVICORPORATIONS"
# for i in string:
#     arr[i] = i

for i in range(0, 5):
    for j in range(0, 5):
        arr[i][j] = string[i]

print(arr)
