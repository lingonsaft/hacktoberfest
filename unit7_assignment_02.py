__author__ = 'Kalyan'

problem = """
Pig latin is an amusing game. The goal is to conceal the meaning of a sentence by a simple encryption.

Rules for converting a word to pig latin are as follows:

1. If word starts with a consonant, move all continuous consonants at the beginning to the end
   and add  "ay" at the end. e.g  happy becomes appyhay, trash becomes ashtray, dog becomes ogday etc.

2. If word starts with a vowel, you just add an ay. e.g. egg become eggay, eight becomes eightay etc.

You job is to write a program that takes a sentence from command line and convert that to pig latin and
print it back to console in a loop (till you hit Ctrl+C).

e.g "There is, however, no need for fear." should get converted to  "Erethay isay, oweverhay, onay eednay orfay earfay."
Note that punctuation and capitalization has to be preserved

You must write helper sub routines to make your code easy to read and write.

Constraints: only punctuation allowed is , and . and they will come immediately after a word and will be followed
by a space if there is a next word. Acronyms are not allowed in sentences. Some words may be capitalized
(first letter is capital like "There" in the above example) and you have to preserve its capitalization in the
final word too (Erethay)
"""

import sys


def pig_latin(sentence):
    s=sentence
    m = s.split(" ")
    s = s.replace(",", "")
    s = s.replace(".", "")
    l = s.split(" ")
    v = set("aeiou")
    for i in l:
        n = ""
        if i[0] in v:
            n = i + "ay"
            k = l.index(i)
            l.remove(i)
            l.insert(k, n)
        else:
            for j in i:
                if j not in v:
                    n += j.lower()
                else:
                    break
            k = l.index(i)
            l.remove(i)
            i = i[len(n):] + n + "ay"
            l.insert(k, i)
    for i in range(len(l)):
        if m[i].istitle():
            l[i] = l[i].title()
        if m[i][-1] == ',':
            l[i] = l[i] + ','
        if m[i][-1] == '.':
            l[i] = l[i] + '.'
    l = " ".join(l)
    return l

def main(argv=None):
    try:
        while True:
            sentence=input()
            print(pig_latin(sentence))
    except KeyboardInterrupt as ki:
         pass


if __name__ == "__main__":
    sys.exit(main())