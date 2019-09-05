class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def getNextNode(self):
        return self.next


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, node):
        current = node
        if(self.head == None):
            self.head = current
            self.tail = current

        else:
            self.tail.next = current
            self.tail = current
        current = None

    def value(self, node):
        if(node.next == None):
            print(node.data)
            return
        print(node.data)
        return self.value(node.next)

    def traverse(self, node, num):
        current = node
        # if(node.next == None):
        #     print("LL ends here")

        while current:
            current = current.next
            return current
        # num -= 1
        # self.traverse(node.next, num)
        # print(node.data)

    def addParticular(self, node, pos, value):
        if(pos == 4):
            print("Doesn't exist")
            return
        temp = Node(value)  # 8
        current = self.traverse(node, 2)  # 6
        nextTemp = current.next  # 7
        temp.next = nextTemp  # 8->7 6->7
        current.next = temp  # 7->8


newList = LinkedList()
root = Node(5)
node1 = Node(6)
node2 = Node(7)
newList.add(root)
newList.add(node1)
newList.add(node2)

newList.addParticular(root, 2, 8)
newList.value(root)
