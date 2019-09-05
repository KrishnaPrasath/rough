# counting the number of a particular character existence

string = "poppop"
countDict = {}
keyList = countDict.keys()
for ch in string:
    if ch in keyList:
        countDict[ch] += 1
    else:
        countDict[ch] = 1


print(countDict)
