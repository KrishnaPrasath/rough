# Given 2 numbers N and K followed by n numbers print the number of repetitions of K.
# Sample Testcase:
# INPUT
# 4 3
# 1 2 3 3
# OUTPUT
# yes
# done
N, K = map(int, input().split())
arr = list(map(int, input().split()))


def repetitions(N, K, arr):
    count = 0
    for i in arr:
        if i == K:
            count += 1
    print(count)


repetitions(N, K, arr)
