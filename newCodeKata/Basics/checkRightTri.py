# use pythogerous
# a2 + b2 = h2
a, b, c = map(int, input().split())


def pyth(a, b, h):
    if a**2+b**2 == h**2:
        return True
    else:
        return False


if pyth(a, b, c):
    print("yes")
else:
    print("no")
