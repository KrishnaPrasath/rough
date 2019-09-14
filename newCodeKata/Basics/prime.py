def prime(N):
    if(N < 4):
        return True
    # if(N == 4):
    #     return True
    for i in range(4, N):
        if(N/i):
            return False
        return True


N = int(input())
# if(prime(N)):
#     print("No")
# else:
#     print("Yes")
