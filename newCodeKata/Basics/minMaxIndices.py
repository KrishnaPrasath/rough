# Given a number N followed by N numbers. Find the smallest number and largest number and print both the indices(1based indexing).
# Input Size: N <= 100000
# Sample Testcase:
# INPUT
# 5
# 1 2 3 4 5
# OUTPUT
# 1 5
N = int(input())
arrN = list(map(int, input().split()))
print(arrN.index(sorted(arrN)[0])+1, arrN.index(sorted(arrN)[-1])+1)
