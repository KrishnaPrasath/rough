# done
import math
N, M = map(int, input().split())
sq = math.sqrt(N*M)
if(sq - math.floor(sq) == 0):
    print("yes")
else:
    print("no")
