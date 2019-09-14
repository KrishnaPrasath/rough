T = int(input())
Q = int(input())
lis = []
for i in range(T):
    for j in range(Q):
        temp = list(map(str, input().split()))
        lis.append(temp)
pokemon = []
for each in lis:
    if each[0] == 'A':
        pokemon.append(int(each[1]))
        # print(pokemon)
    elif each[0] == 'I':
        temp = int(each[1])
        pokemon = [x+temp for x in pokemon]
        # print(pokemon)
    elif each[0] == 'D':
        temp = int(each[1])
        pokemon = [x-temp for x in pokemon]
        # print(pokemon)
    elif each[0] == 'P':
        if(int(each[1]) > len(pokemon)):
            print(-1)
        else:
            temp = sorted(pokemon)
            print(temp[len(pokemon)-(int(each[1]))])
