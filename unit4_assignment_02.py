__author__ = 'Kalyan'

notes = '''
For this assignment, you have to define a few basic classes to get an idea of defining your own types.
'''


# For this problem, define a iterator class called Repeater which can be used to  generate an infinite
# sequence of this form: 1, 2, -2, 3, -3, 3, etc. (for each number N is repeated N times with opposing signs).
# Use the class instance state to keep track of the iteration state. Do not allocate large amounts of memory :)!
# Refer to: https://docs.python.org/3/library/stdtypes.html#iterator-types

class Repeater:
    def __init__(self):
        self.n=1
        self.count=0
    def __iter__(self):
        return self

    def __next__(self):
        if self.n==self.count:
            self.count=0
            self.n+=1
        if self.count%2==0:
            self.count+=1
            return self.n
        else:
            self.count+=1
            return -self.n
# get the sum of next n numbers returned by the repeater
def get_sum(r, n):
    sum = 0
    count = 0
    # we can write code like this as r is an iterator
    for value in r:
        sum += value;
        count += 1
        if count == n:
            break
    return sum


def test_repeater_basic():
    r = Repeater()
    assert hasattr(r, "__init__")
    assert hasattr(r, "__iter__")
    assert hasattr(r, "__next__")

def test_repeater_function():
    assert 1 == get_sum(Repeater(), 1)
    assert 3 == get_sum(Repeater(), 2)
    r1 = Repeater()
    r2 = Repeater()
    # state must be remembered across calls
    assert 1 == get_sum(r1, 1)
    assert 2 == get_sum(r1, 1)
    assert -2 == get_sum(r1, 1)
    assert 4 == get_sum(r2, 6)
    assert 3 == get_sum(r1, 3)
    assert 0 == get_sum(r2, 4)
    assert 0 == get_sum(r1, 4)

    # note that this should not result in any large lists or memory anywhere!
    # uncomment this for testing, but COMMENT IT OUT AGAIN BEFORE SUBMITTING AS IT TAKES SOMETIME TO RUN.

    # assert 501263 == get_sum(Repeater(), 10**6)
    # assert 4999696 == get_sum(Repeater(), 10**7)
