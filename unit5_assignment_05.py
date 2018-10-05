__author__ = 'Kalyan'

notes = '''
1. Read instructions for the function carefully and constraints carefully.
2. Try to generate all possible combinations of tests which exhaustively test the given constraints.
3. If behavior in certain cases is unclear, you can ask on the forums
'''
from placeholders import *

# Convert a sentence which has either or to only the first choice.
# e.g we could either go to a movie or a hotel -> we could go to a movie.
# note: do not use intermediate lists (string.split), only use string functions
# assume words are separated by a single space. you can use control flow statements
# So sentence is of form <blah> either <something> or <somethingelse> and gets converted to <blah> <something>
# if it is not of the correct form, you just return the original sentence.
def prune_either_or(sentence):
    if sentence==None:
        return None
    if 'either ' not in sentence or 'or ' not in sentence:
        return sentence
    l=[]
    temp=''
    for i in sentence:
        if i==' ':
           l.append(temp)
           temp=''
        else:
            temp=temp+i
    if temp:
       l.append(temp)
    if 'either' in l or 'or' in l:
      n=l.index('either')
      m=l.index('or')
      if n==0:
        return sentence
      if n>m:
        return sentence
      if m==n+1:
          return sentence
      l.remove('either')
      if 'or' in l:
          x=l.index('or')
          l=l[:x]
    str=''
    for i in l:
        if str=='':
            str=str+i
        else:
            str=str+' '+i
    return str


def test_prune_either_or_student():
    assert "we could go to movie"== prune_either_or("we could either go to movie or a hotel")
    assert 'we could dance'==prune_either_or('we could dance')
    assert 'we could play or watch movie either we will code'==prune_either_or('we could play or watch movie either we will code')
    assert 'either this or that'==prune_either_or('either this or that')
    assert "It is neither here nor there" == prune_either_or("It is neither here nor there")
    assert "Two cities either and oregon" == prune_either_or("Two cities either and oregon")
    assert "Some random either or test" == prune_either_or("Some random either or test")
    assert None== prune_either_or(None)

# these tests run only on our runs and will be skipped on your computers.
# DO NOT EDIT.
import pytest
def test_prune_either_or_server():
    servertests = pytest.importorskip("unit5_server_tests")
    servertests.test_prune_either_or(prune_either_or)
