# Given a number N and 2 numbers L and R. Check whether N is between L and R. Print yes/no.
# Sample Testcase :
# INPUT
# 3
# 2 6
# OUTPUT
# yes
# done
N = int(input())
L, R = map(int, input().split())
if(L < N and N < R):
    print("yes")
else:
    print("no")
