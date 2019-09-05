class Recursion:
    def recur(self, num):
        if(num == 0):
            return
        print(num)
        return self.recur(num-1)


obj = Recursion()
obj.recur(5)
