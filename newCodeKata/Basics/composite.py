# Given a number N, print 'yes' if it is composite else print 'no'.
# Sample Testcase :
# INPUT
# 123
# OUTPUT
# yes

N = int(input())
# composite = []
# prime = []


def checkComposite(N):

    while True:
        for i in range(2, N):
            for j in range(2, N):
                if i * j == N:
                    print("yes")
                    # composite.append(N)
                    return
        else:
            print("no")
            # prime.append(N)
            return


# for k in range(100):
checkComposite(N)

# print(composite)
# print(prime)
