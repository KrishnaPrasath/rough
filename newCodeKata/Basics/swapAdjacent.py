s = list(input().split())
print(s)
for i in range(0, len(s), 2):
    s[i] = s[i]+s[i+1]
    s[i+1] = s[i]-s[i+1]
    s[i] = s[i]-s[i+1]
# count = 0
# for i in s:
#     if count == 0 or count %2 == 0:

#     count+=1
print(s)
