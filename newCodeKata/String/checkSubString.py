# Given 2 strings of length N,M check if the second string is a substring of the first string.
# Input Size : 1 <= N <= 100000
# Sample Testcase :
# INPUT
# Banana ana
# OUTPUT
# yes

A, B = map(str, input().split())
N = len(A)
M = len(B)


def checkSub(a, b):
    if b in a:
        print('yes')
    else:
        print('no')


if N >= 1 and N <= 100000:
    checkSub(A, B)
