N = int(input())
gcd = []
def div(num):
    for i in range(num):
        if num % i == 0:
            gcd.append(i)
