# # getting the number of size
N = int(input())

# # getting input from single line
arr = list(map(int, input().split()))

for j in range(0, N):
    if(j != 0):
        arr[j] += arr[j-1]
for i in arr:
    print(i, end=" ")
