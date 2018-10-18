#include <stdio.h>

/* detab: replaces tabs with proper number of blanks to next tab stop */

main()
{
    int c;

    while ((c = getchar()) != EOF){
        if(c == '\t')
            for (int i = 0; i < 4; ++i)
                putchar(' ');
        else
            putchar(c);
    }
}
