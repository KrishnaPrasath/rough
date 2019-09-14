# scalene triangle
# done
a, b, c = map(int, input().split())


def checkTri(x, y, z):
    if x == y or x == z or y == z:
        print("no")
    else:
        if x+y > z and x+z > y and y+z > x:
            print("yes")
        else:
            print("no")


checkTri(a, b, c)
