# how to get input from multiple lines into one variable
numList = []

while True:
    line = list(map(int, input().split()))
    if line:
        numList.append(line)
    else:
        break

result = []
for item in numList:
    for i in range(1):
        result.append(item[1]-item[0])

for each in result:
    print(each)
