import random



Rock = 1

Papper = 2

Scisoors = 3 

global scop, scocc

scop=0
scocc=0

times=int(input("How many rounds do you want to play\n"))
#lets you chose how many games you want to play
for i in range (0,times):
    print()
    print()
    print("1 = Rock")
    print("2 = Papper")
    print("3 = Scisoors")



    print()

    ply = int(input("Pick what to use 1-3 \n"))

    compm = random.randint(1,3)

    print(compm)

    if ply == 1 and compm == 1:
        print()
        print("Computer chose Rock")
        print()
        print("Draw")
    #Rock - Rock draw
        
    if ply == 2 and compm == 2:
        print()
        print("Computer chose Papper")
        print()
        print("Draw")
    #Papper - papper draw
        
    if ply == 3 and compm == 3:
        print()
        print("Computer chose Scissors")
        print()
        print("Draw")
    #Scisoors - scissors draw

    if ply == 1 and compm == 2:
        print()
        print("Computer chose Papper")
        print()
        print("Computer wins")
        scocc += 1
    #rock and papper computer win

    if ply == 2 and compm == 1:
        print()
        print("Computer chose rock")
        print()
        print("You win")
        scop += 1
    # rock and papper user win

    if ply == 1 and compm == 3:
        print()
        print("Computer chose rock")    
        print()
        print("Computer wins")
        scocc += 1
    # rock and scissors computer win

    if ply == 3 and compm == 1:
        print()
        print("Computer chose scissors")
        print()
        print("You win")
        scop += 1
    # rock scissors user win

    if ply == 2 and compm == 3:
        print()
        print("Computer chose papper")
        print()
        print("You win")
        scop += 1
    # scissor and papper user win

    if ply == 3 and compm == 2:
        print()
        print("Computer chose sissors")
        print()
        print("Computer wins")
        scocc += 1
        # scissor and papper computer wins

        
    if ply > 3:
        print()
        print("You need a number betwen 1 - 3")

        # tells user if there input is invalied
    print()    
    print("The scores are You", + scop , "The computer", + scocc)
    print("__________________________________________________________")

    
