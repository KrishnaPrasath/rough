N , K = map(int,input().split())
arr = list(map(int,input().split()))
count = 0

for i in arr:
    if(i == K):
        count += 1
print(count)
