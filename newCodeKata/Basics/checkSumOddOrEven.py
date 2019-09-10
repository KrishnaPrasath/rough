# N, M = map(int, input().split())


# def checkOdd(a, b):
#     if (a+b) % 2:
#         return False
#     else:
#         return True


# if(checkOdd(N, M)):
#     print("Even")
# else:
#     print("odd")
# done
N, M = map(int, input().split())


def checkOdd(a, b):
    if (a+b) % 2 == 0:
        return True
    else:
        return False


if(checkOdd(N, M)):
    print("even")
else:
    print("odd")
