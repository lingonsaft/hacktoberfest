from random import shuffle

nums = [int(input()) for i in range(10)]
while sorted(nums) != nums:
    shuffle(nums)
print(nums)
