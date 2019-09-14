# Given 3 numbers A,B,C.Print yes if they can form the sides of a triangle otherwise no.
# Input Size : A,B,C <= 100000
# Sample Testcase :
# INPUT
# 3 4 5
# OUTPUT
# yes
a, b, c = map(int, input().split())


def check(x, y, z):
    if x+y > z and x+z > y and y+z > x:
        print("yes")
    else:
        print("no")


check(a, b, c)
