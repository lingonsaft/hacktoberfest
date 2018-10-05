__author__ = 'Kalyan'

notes = '''
Some definitions (we have already seen this in unit2):

Factorized form:
If number = a1 ^ p1 * a2 ^ p2 ... where a1, a2 are primes and p1, p2 are powers >=1 then we represent that using lists
and tuples in python as [(a1,p1), (a2,p2), ...]

Note that a1 < a2 < ... and p1, p2 etc are all >= 1.

For e.g.
 [(2,1), (5,1)] is the correct prime factorization of 10 as defined above.
 [] is a corner case and represents 1.
 [(5,1), (2,1)] is invalid as the the order is not correct.
 [(2,1), (3,0), (5,1)] is invalid as a prime with power 0 is present in the result.

-------------------------------------

NOTE: For this assignment define functions in a module called factormath which lives in unit4tests package.

You need to define the following methods:

1. factorize (number): given a number, convert it to the factorized form as described in unit2 assignment 3.
   You can copy over that method and use it for your own testing.

2. get_hcf(first, second): given 2 numbers in factorized form as described above. Return the hcf of those 2 numbers in
   a valid factorized form.

3. get_lcm(first, second): given 2 numbers in factorized form as described above. Return the lcm of those 2 numbers
   in a valid factorized form.

4. multiply(first, second): given 2 numbers in factorized form, return the multiplication of those 2 numbers in
   a valid factorized from.

NOTE: You must return the result in a valid prime factorized form as described in the factorized problem.
Invalid results will fail the tests, so do pay attention to the definition of a valid factorization given in problem1.

Use python builtins and data types as you see fit.

For HCF and LCM using factorized forms see: http://www.whitman.edu/mathematics/higher_math_online/section03.06.html

Notes:
1. Assume inputs are valid and of the the right type.
2. first and second are list of tuples which represent a number and they are in prime factorized form as described in
   problem1
3. Do not convert the list into a number and then do ordinary math with it :). Deal with the factorized forms directly.
   See the above link.
'''
def factormath(number):
    if type(number).__name__ == 'float':
        raise TypeError
    if number < 0:
        raise ValueError

    if number == 1:
        return []
    else:
        count = 0
        res = []
        while number % 2 == 0:
            count += 1
            number = number / 2
        if count != 0:
            res.append((2, count))
        for i in range(3, int(number // 2)):
            if (number <= 1):
                break
            count = 0
            while number % i == 0:
                count = count + 1
                number = number / i
            if count != 0:
                res.append((i, count))
    return res


def test_get_hcf():
    # define the right packages and modules so that this import works
    from unit4tests.factormath import get_hcf
    assert get_hcf([], [(2,5)]) == []
    assert get_hcf([], []) == []
    assert get_hcf([(2,3), (3,3), (11,1)], [(5,2)]) == []
    assert get_hcf([(2,3), (5,3), (17, 2)], [(2,1), (3,5), (5,2), (19,1)]) ==  [(2,1), (5,2)]
    assert get_hcf([(2,1), (11,3), (19,2), (7919, 4)], [(2,2), (7,1), (19,1), (2687,4)]) == [(2,1), (19,1)]


def test_get_lcm():
    # define the right packages and modules so that this import works
    from unit4tests.factormath import get_lcm
    assert get_lcm([], [(2,5)]) == [(2,5)]
    assert get_lcm([], []) == []
    assert get_lcm([(5,1)], [(5,3), (7,2), (11,1)]) == [(5,3), (7,2), (11,1)]
    assert get_lcm([(2,3), (3,2), (5,3)], [(3,1), (5,2)]) == [(2,3), (3,2), (5,3)]
    assert get_lcm([(2,1), (5,2), (7,2)], [(2,2), (3,1), (17,2)]) == [(2,2), (3,1), (5,2), (7,2), (17,2)]
    assert get_lcm([(2,1),(19, 1), (7919,4)], [(2,2), (17,1), (2687,4)]) == [(2,2), (17,1), (19,1), (2687, 4), (7919,4)]


def test_multiply():
    # define the right packages and modules so that this import works
    from unit4tests.factormath import multiply
    assert multiply([], [(2,5)]) == [(2,5)]
    assert multiply([], []) == []
    assert multiply([(2,1), (5,2), (7,2)], [(2,2), (3,1), (17,2)]) == [(2,3), (3,1), (5,2), (7,2), (17,2)]
    assert multiply([(2,1),(19, 1), (7919,4)], [(2,2), (17,1), (19,1), (2687,4)]) == [(2,3), (17,1), (19,2), (2687, 4), (7919,4)]
    
