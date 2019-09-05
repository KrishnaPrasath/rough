# counting the number of a particular character existence

string = "Hai how are you"
strList = string.split()
countDict = {}
keyList = countDict.keys()
for ch in strList:
    if ch in keyList:
        countDict[ch] += 1
    else:
        countDict[ch] = 1


print(countDict)
