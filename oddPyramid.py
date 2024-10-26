def pyramid(x):
   
    for row in range(1, x + 1): # O (x) 
        current_number = 1 
        current_row = ''  
        
        
        for count in range(row): #O(row)
            current_row += str(current_number) + ' '  #O(current row) 
            current_number += 2  

        print(current_row)  

        # ==>O(n^2)


x = int(input("Enter the number of rows: "))  
pyramid(x)  

# O(n) + O(n^2)= O(n^2)
