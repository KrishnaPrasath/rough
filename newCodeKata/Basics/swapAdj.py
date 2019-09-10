# Given an array of numbers switch(swap) the adjacent characters.
# Sample Testcase :
# INPUT
# 5
# 3 2 1 2 3
# OUTPUT
# 2 3 2 1 3


def swapAdjacent(N, arr):
    for i in range(1, N+1, 2):

        arr[i-1] = arr[i]+arr[i-1]
        arr[i] = arr[i-1] - arr[i]
        arr[i-1] = arr[i-1] - arr[i]

    print(*arr)


N = 5
lis = [3, 2, 1, 2, 3]


swapAdjacent(N, lis)
