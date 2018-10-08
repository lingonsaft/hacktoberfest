try:
    import pygame,sys
    from pygame.locals import *
except ImportError:
    print("please install pygame")
w = 800
h = 400
x=1

r = 70
g = 150
b = 100

r1 = 1

screen = pygame.display.set_mode((w,h))
pygame.display.update()
clock = pygame.time.Clock()

while 1:
    clock.tick(60)
    pygame.draw.ellipse(screen, (r,g,b),(350,120,140,160),x)
    pygame.display.update()
    if x < 70:
        x+=1 
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()
        elif event.type == KEYDOWN and event.key == K_ESCAPE:
            sys.exit()