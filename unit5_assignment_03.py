__author__ = 'Kalyan'

notes = '''
Now we move on to writing both the function and the tests yourself.

In this assignment you have to write both the tests and the code. We will verify your code against our own tests
after you submit.
'''

# fill up this routine to test if the 2 given words given are anagrams of each other. http://en.wikipedia.org/wiki/Anagram
# your code should handle
#  - None inputs
#  - Case  (e.g Tip and Pit are anagrams)
def are_anagrams(first, second):
    if type(first).__name__=='NoneType' or type(second).__name__=='NoneType':
        return False
    first=first.lower()
    second=second.lower()
    l1=sorted(first)
    l2=sorted(second)
    if l1==l2:
        return True
    else:
        return False

#or use collections package
#from collections import Counter
#Counter("nana")==Counter('anna')

# write your own exhaustive tests based on the spec given
def test_are_anagrams_student():
    assert True == are_anagrams("pit", "tip") #sample test.

    assert False == are_anagrams(None,None)
    assert True == are_anagrams("None","none")
    assert False==are_anagrams("bigg","big")
    assert True==are_anagrams("Slate","Least")
    assert False == are_anagrams(None, None)
    assert False == are_anagrams(None, "hello")
    assert False == are_anagrams("hello", None)
    assert False == are_anagrams("bigg", "big")
    assert False == are_anagrams("bigg", "biig")
    assert False == are_anagrams("big", "small")

    assert True == are_anagrams("vile", "live")




# these tests run only on our runs and will be skipped on your computers.
# DO NOT EDIT.
import pytest
def test_are_anagrams_server():
    servertests = pytest.importorskip("unit5_server_tests")
    servertests.test_are_anagrams(are_anagrams)
