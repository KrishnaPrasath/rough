# Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
# Sample Testcase :
# INPUT
# XCODE
# OUTPUT
# XOE CD
string = input()

odd = []
even = []

for i in range(len(string)):
    if i % 2 == 0:
        odd.append(string[i])
    else:
        even.append(string[i])

oddS = ''.join(odd)
evenS = ''.join(even)
print(oddS, evenS)
