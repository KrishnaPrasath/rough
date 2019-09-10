import math
# xx = map(int,input().split())
# xy = map(int,input().split())
# yx = map(int,input().split())
# yy = map(int,input().split())
xx = [10, 10]
xy = [10, 20]
yx = [20, 10]
yy = [20, 20]


flag = True
count = 0
diagonal = yy[0]-xy[0]


def check(points, count):

    for i in range(2):
        if points[0]-points[1] == 0 or points[0]-points[1] == diagonal or points[0]-points[1] == -diagonal:
            count += 1
            print(count, points)
        else:
            # print(count)
            return


check(xx, count)
check(xy, count)
check(yx, count)
check(yy, count)


if(count == 4):
    print("Yes")
else:

    print("No")
