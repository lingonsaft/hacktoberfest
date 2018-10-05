__author__ = 'Kalyan'

problem = """
 We are going to revisit unit6 assignment3 for this problem.

 Given an input file of words (mixed case). Group those words into anagram groups and write them
 into the destination file so that words in larger anagram groups come before words in smaller anagram sets.

 With in an anagram group, order them in case insensitive ascending sorting order.

 If 2 anagram groups have same count, then set with smaller starting word comes first.

 For e.g. if source contains (ant, Tan, cat, TAC, Act, bat, Tab), the anagram groups are (ant, Tan), (bat, Tab)
 and (Act, cat, TAC) and destination should contain Act, cat, TAC, ant, Tan, bat, Tab (one word in each line).
 the (ant, Tan) set comes before (bat, Tab) as ant < bat.

 At first sight, this looks like a big problem, but you can decompose into smaller problems and crack each one.

 This program should be written as a command line script. It takes one argument the input file of words and outputs
 <input>-results.txt where <input>.txt is the input file of words.
"""
import sys
import string
import os
import inspect
import itertools

def open_input_file(file, mode="rt"):
    mod_dir = get_module_dir()
    test_file = os.path.join(mod_dir, file)
    return open(test_file, mode)

def get_temp_dir():
    module_dir = get_module_dir()
    temp_dir = os.path.join(module_dir, "tempfiles")
    if not os.path.exists(temp_dir):
        os.mkdir(temp_dir)
    return temp_dir


def get_module_dir():
    mod_file = inspect.getfile(inspect.currentframe())
    mod_dir = os.path.dirname(mod_file)
    return mod_dir

def open_temp_file(file, mode):
    data_dir = os.getenv("DATA_DIR", default=get_temp_dir())
    out_file = os.path.join(data_dir, file)
    return open(out_file, mode)

def get_input_file(source):
    '''reads input from a file'''
    f = open_input_file(source)
    return f

def filter_comments(f):
    '''filter comment from read data'''
    lines = []
    for x in f:
        lines.append(x)
    lines.remove('\n')
    for i in lines:
        if i[0] == '#' or i[0] == " ":
            lines.remove(i)

    return lines

def group_anagrams(filtered_data):
    '''takes in processed data and groups them

    returns a dictionary where key = base anagram value = list of matched anagrams'''
    lines=filtered_data
    x = "".join(lines).split('\n')
    y = "".join(lines).split('\n')
    x = ",".join(x)
    y = ",".join(y).lower()
    y = y.split(',')
    x = x.split(',')
    from itertools import groupby
    out = [list(group) for key, group in itertools.groupby(sorted(y, key=sorted), sorted)]
    out.sort()
    out.sort(key=len)
    out.sort(key=len, reverse=True)
    for i in out:
        i.sort()
    for i in out:
        for j in i:
            if j in x:
                x.remove(j)
                continue
            else:
                for k in x:
                    if (k.lower()) == (j):
                        n = i.index(j)
                        i.remove(j)
                        i.insert(n, k)
                        x.remove(k)
                        break
    return out

def put_output_file(groups):
    '''writes to output file'''
    f1 = open_temp_file("unit7_output_01.txt", "w")  # same as "wt"
    for i in groups:
        for j in i:
            f1.write(j)
            f1.write('\n')
    f1.close()

#our code to perform all operations
def anagram_sort(source):
    data = get_input_file(source)
    filtered_data = filter_comments(data)
    groups = group_anagrams(filtered_data)

    put_output_file(groups)

def main(argv=None):
    if argv is None:
        argv = sys.argv

    try:
        source = argv[1]
        anagram_sort(source)
    except Exception as e:
        # redirect error/exception to standard error
        print(e)
        return 1

if __name__ == "__main__":
    sys.exit(main())