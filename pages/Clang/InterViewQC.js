import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function InterViewQC() {
   
    const data=[
        {Q:'1. Why is C called a mid-level programming language?',
        ans:'C has characteristics of both assembly-level i.e. low-level and higher-level languages. So as a result, C is commonly called a middle-level language. Using C, a user can write an operating system as well as create a menu-driven consumer billing system'},
        {Q:'2. What are the features of the C language?',
        ans:' C language is portable or Machine IndependentC is a mid-level Programming Language. It is a structured Programming Language.It has a function-rich library. Dynamic Memory Management. C is super fast  We can use pointers in C.It is extensible.'},
        {Q:'3. What is a token?',
        ans:'The individual elements of a program are called Tokens. There are following 6 types of tokens are available in C: 1.Identifiers2. Keywords3.  Constants 4.Operators  5.Special Characters 6.String'},
        {Q:'4. What is the use of printf() and scanf() functions? Also explain format specifiers?',
        ans:"printf() is used to print the output on the display. scanf() is used to read formatted data from the keyboard. Some datatype format specifiers for both printing and scanning purposes are as follows: %d: It's a datatype format specifier for printing and scanning an integer value. * %s: It's a datatype format specifier for printing and scanning a string.  %c: It's a datatype format specifier for displaying and scanning a character value.%f: The datatype format specifier %f is used to display and scan a float value. "},
        {Q:"5. Whats the value of the expression 5['abxdef']?",
        ans:"The answer is 'f'.Explanation: The string mentioned 'abxdef' is an array, and the  expression is equal to 'abxdef'[5]. Why is the inside-out expression equivalent?  Because a[b] is equivalent to *(a + b) which is equivalent to *(b + a) which is equivalent to b[a]."},
        {Q:'6. What is a built-in function in C?',
        ans:'The most commonly used built-in functions in C are scanf(), printf(), strcpy, strlwr, strcmp, strlen, strcat, and many more.        Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C'},
        {Q:'7. What is a Preprocessor?',
        ans:'A preprocessor is a software program that processes a source file before sending it to be compiled. Inclusion of header files, macro expansions, conditional compilation, and line control are all possible with the preprocessor.'},
        {Q:'8. In C, What is the #line used for?',
        ans:'In C, #line is used as a preprocessor to re-set the line number in the code, which takes a parameter as line number. Here is an example for the same'},
        {Q:'9. How can a string be converted to a number?',
        ans:'The function takes the string as an input that needs to be converted to an integer.int atoi(const char *string)'},
        {Q:'10. How can a number be converted to a string?',
        ans:'The function takes a pointer to an array of char elements that need to be converted, and a format string needs to be written in a buffer as a string..int sprintf(char *str, const char *format, ...)        '},
        {Q:'11. What is recursion in C?',
        ans:' When a function in C calls a copy of itself, this is known as recursion. To put it another way, when a function calls itself, this technique is called Recursion. Also, this function is known as recursive function.'},
        {Q:'12. Why doesn’t C support function overloading?',
        ans:'After you compile the C source, the symbol names need to be intact in the object code. If we introduce function overloading in our source, we should also provide name mangling as a preventive measure to avoid function name clashes. Also, as C is not a strictly typed language many things(ex: data types) are convertible to each other in C. Therefore, the complexity of overload resolution can introduce confusion in a language such as C.When you compile a C source, symbol names will remain intact. If you introduce function overloading, you should provide a name mangling technique to prevent name clashes. Consequently, like C++, you will have machine-generated symbol names in the compiled binary.'},
        {Q:'13. What is the difference between global int and static int declaration?',
        ans:'The difference between this is in scope. A truly global variable has a global scope and is visible everywhere in your program.\n   Global_temp is a global variable that is visible to everything in your program, although to make it visible in other modules, you would need an "extern int global_temp; " in other source files if you have a multi-file project.\n \n A static variable has a local scope but its variables are not allocated in the stack segment of the memory. It can have less than global scope, although - like global variables - it resides in the .bss segment of your compiled binary'},
        {Q:'14. What is a pointer in C?',
        ans:'A pointer is a variable that stores or points to another variables address. The value of a variable is stored in a normal variable, whereas the address of a variable is stored in a pointer variable.'},
        {Q:'15. Difference between const char* p and char const* p?',
        ans:'const char* p is a pointer to a const char.\n char const* p is a pointer to a char const.\nSince const char and char const are the same, its the same.        '},
        {Q:'16. What is pointer to pointer in C?',
        ans:'In C, a pointer can also be used to store the address of another pointer. A double pointer or pointer to pointer is such a pointer. The address of a variable is stored in the first pointer, whereas the address of the first pointer is stored in the second pointer. \nThe syntax of declaring a double pointer is given below: int **p;       '},
        {Q:'17. Why n++ executes faster than n+1 ?',
        ans:'n++ being a unary operation, it just needs one variable. Whereas, n = n + 1 is a binary operation that adds overhead to take more time (also binary operation: n += 1). However, in modern platforms, it depends on few things such as processor architecture, C compiler, usage in your code, and other factors such as hardware problems.\n While in the modern compiler even if you write n = n + 1 it will get converted into n++ when it goes into the optimized binary, and it will be equivalently efficient        '},
        {Q:'18. What is typecasting in C?',
        ans:'Typecasting is the process to convert a variable from one datatype to another.  If we want to store the large type value to an int type, then we will convert the data type into another data type explicitly \n   Syntax: (data_type)expression;'},
        {Q:'19. What are the advantages of Macro over function?',
        ans:'Macro on a high-level copy-paste, its definitions to places wherever it is called. Due to which it saves a lot of time, as no time is spent while passing the control to a new function and the control is always with the callee function. However, one downside is the size of the compiled binary is large but once compiled the program comparatively runs faster'},
        {Q:'20. What are Enumerations?',
        ans:'Enumeration, also known as Enum in C, is a user-defined data type. It consists of constant integrals or integers that have names assigned to them by the user. Because the integer values are named with enum in C, the whole program is simple to learn, understand, and maintain by the same or even different programmer.'},
        {Q:'21. When should we use the register storage specifier?',
        ans:'If a variable is used frequently, it should be declared with the register storage specifier, and the compiler may allocate a CPU register for its storage to speed up variable lookup        '},
        {Q:'22. Specify different types of decision control statements?        ',
        ans:'All statements written in a program are executed from top to bottom one by one. Control statements are used to execute/transfer the control from one part of the program to another depending on the condition \n   *If-else statement\n     normal if-else statement\n     Else-if statement\n     nested if-else statement\n    *Switch statement'},
        {Q:'23. What is an r-value and l-value?',
        ans:'*The term "r-value" refers to a data value stored in memory at a given address. An r-value is an expression that cannot have a value assigned to it, hence it can only exist on the right side of an assignment operator(=).\n *The term "l-value" refers to a memory location that is used to identify an object. The l-value can be found on either the left or right side of an assignment operator(=). l-value is frequently used as an identifier.'},
        {Q:'24. What is the difference between malloc() and calloc() ?       ',
        ans:'calloc() and malloc() are memory dynamic memory allocating functions. The main difference is that malloc() only takes one argument, which is the number of bytes, but calloc() takes two arguments, which are the number of blocks and the size of each block        '},
        {Q:'25. What is the difference between struct and union in C?        ',
        ans:'A struct is a group of complex data structures stored in a block of memory where each member on the block gets a separate memory location to make them accessible at once\n  Whereas in the union, all the member variables are stored at the same location on the memory as a result to which while assigning a value to a member variable will change the value of all other members        '},
        {Q:'26. What is call by reference in functions?        ',
        ans:'When we caller function makes a function call bypassing the addresses of actual parameters being passed, then this is called call by reference. In incall by reference, the operation performed on formal parameters affects the value of actual parameters because all the operations performed on the value stored in the address of actual parameters.        '},
        {Q:'27. What is pass by reference in functions?        ',
        ans:'In Pass by reference, the callee receives the address and makes a copy of the address of an argument into the formal parameter. Callee function uses the address to access the actual argument (to do some manipulation). If the callee function changes the value addressed at the passed address it will be visible to the caller function as well.        '},
        {Q:'28. What is a memory leak? How to avoid it?        ',
        ans:'When we assign a variable it takes space of our RAM (either heap or RAM)dependent on the size of data type, however, if a programmer uses a memory available on the heap and forgets to a delta it, at some point all the memory available on the ram will be occupied with no memory left this can lead to a memory leak.\n    To avoid memory leaks, you can trace all your memory allocations and think forward, where you want to destroy (in a good sense) that memory and place delete there. Another way is to use C++ smart pointer in C linking it to GNU compilers.        '},
        {Q:'29. What is Dynamic memory allocation in C? Name the dynamic allocation functions.        ',
        ans:'C is a language known for its low-level control over the memory allocation of variables in DMA there are two major standard library malloc() and free. The malloc() function takes a single input parameter which tells the size of the memory requested It returns a pointer to the allocated memory. If the allocation fails, it returns NULL. The prototype for the standard library function is like this:\n void *malloc(size_t size);\nThe free() function takes the pointer returned by malloc() and de-allocates the memory. No indication of success or failure is returned. The function prototype is like this:  \nvoid free(void *pointer);\nThere are 4 library functions provided by C defined under <stdlib.h> header file to facilitate dynamic memory allocation in C programming. They are:\n malloc()\n calloc()\n free() \n realloc()        '},
        {Q:'30. What is typedef?        ',
        ans:'typedef is a C keyword, used to define alias/synonyms for an existing type in C language. In most cases, we use typedefs to simplify the existing type declaration syntax. Or to provide specific descriptive names to a type. \n  typedef <existing-type> <new-type-identifiers>;\ntypedef provides an alias name to the existing complex type definition. With typedef, you can simply create an alias for any type. Whether it is a simple integer to complex function pointer or structure declaration, typedef will shorten your code '},
        {Q:'31. Why is it usually a bad idea to use gets()? Suggest a workaround.        ',
        ans:'The standard input library gets() reads user input till it encounters a new line character. However, it does not check on the size of the variable being provided by the user is under the maximum size of the data type which makes the system vulnerable to buffer overflow and the input being written into memory where it isn’t supposed to. \n\nWe, therefore, use gets() to achieve the same with a restricted range of input        '},
        {Q:'32. What is the difference between #include "..." and #include <...>?        ',
        ans:'In practice, the difference is in the location where the preprocessor searches for the included file.\n For #include <filename> the C preprocessor looks for the filename in the predefined list of system directories first and then to the directories told by the user(we can use -I option to add directories to the mentioned predefined list). \n For #include "filename" the preprocessor searches first in the same directory as the file containing the directive, and then follows the search path used for the #include <filename> form. This method is normally used to include programmer-defined header files.        '},
        {Q:'33. What are dangling pointers? How are dangling pointers different from memory leaks?        ',
        ans:'The dangling pointer points to a memory that has already been freed. The storage is no longer allocated. Trying to access it might cause a Segmentation fault. A common way to end up with a dangling pointer:\nYou are returning an address that was a local variable, which would have gone out of scope by the time control was returned to the calling function. (Undefined behavior)\n freee(ptr) //deletes pointer\n A memory leak is something where the memory allocated is not freed which causes the program to use an undefined amount of memory from the ram making it unavailable for every other running program(or daemon) which causes the programs to crash. There are various tools like O profile testing which is useful to detect memory leaks on your programs.        '},
        {Q:'34. What is the difference between ‘g’ and “g” in C? ',
        ans:'In C double-quotes variables are identified as a string whereas single-quoted variables are identified as the character. Another major difference being the string (double-quoted) variables end with a null terminator that makes it a 2 character array.        '},
        {Q:'35. What is a near pointer and a far pointer in C?        ',
        ans:'Near Pointer: In general, the near pointer can be considered because it is used to hold the address, which has a maximum size of just 16 bits. We cant store an address with a size larger than 16 bits using the near pointer. All other smaller addresses that are within the 16-bit limit, on the other hand, can be stored. Because we can only access 64kb of data at a time, you might assume the 16 bits are insufficient. As a result, it is regarded as one of the near-pointers biggest drawbacks, which is why it is no longer commonly used.\nFar Pointer: A far pointer is considered a pointer of size 32 bits. It can, however, use the current segment to access information stored outside the computers memory. Although, in order to use this type of pointer, we usually need to allocate the sector register to store the data address in the current segment.        '},
        {Q:'36. Which structure is used to link the program and the operating system?        ',
        ans:'The file structure is used to link the operating system and a program. The header file "stdio.h" (standard input/output header file) defines the file. It contains information about the file being used like its current size and its memory location. It contains a character pointer that points to the character which is currently being opened. When you open a file, it establishes a link between the program and the operating system about which file is to be accessed.        '},
        {Q:'37. Suppose a global variable and local variable have the same name. Is it possible to access a global variable from a block where local variables are defined?        ',
        ans:'No. This isn’t possible in C. It’s always the most local variable that gets preference.        '},
        {Q:'38. Which is better #define or enum?        ',
        ans:'If we let it, the compiler can build enum values automatically. However, each of the defined values must be given separately.\n Because macros are preprocessors, unlike enums, which are compile-time entities, the source code is unaware of these macros. So, if we use a debugger to debug the code, the enum is superior.\nSome compilers will give a warning if we use enum values in a switch and the default case is missing.\nEnum always generates int-type identifiers. The macro, on the other hand, allowed us to pick between various integral types.\nUnlike enum, the macro does not have a defined scope constraint.        '},
        {Q:'39. How can you remove duplicates in an array?        ',
        ans:'the following logic will help to you \n for (i = 0; i<n; i++) {\n  for (j = 0; j<calc; j++) {\n        if(a[i] == b[j])\n          break;\n      }\n   if (j== calc) {\n    b[calc] = a[i];\n     calc++;\n    }\n}'},
        {Q:'40. Can we compile a program without a main() function?        ',
        ans:'Yes, we can compile a program without main() function Using Macro        '},
        {Q:'41. Write a program to get the higher and lower nibble of a byte without using shift operator?        ',
        ans:''},


        {Q:'42. How do you override a defined macro?        ',
        ans:'To override a defined macro we can use #ifdef and #undef preprocessors as follows:\n#ifdef A\n#undef A \n#endif\n#define A 10\nIf macro A is defined, it will be undefined using undef and then defined again using define.        '},
        {Q:'43. Write a C program to check if it is a palindrome number or not using a recursive method.        ',
        ans:'int reverse(int num);\nint isPalindrome(int num);\nint main()\n{\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(isPalindrome(num) == 1)\n{\nprintf("the given number is a palindrome");\n}\nelse\n{\nprintf("the given number is not a palindrome number");\n}\nreturn 0;\n}\nint isPalindrome(int num)\n    {\n    if(num == reverse(num))\n  {\n    return 1;\n    }\n    return 0;\n    }\nint reverse(int num)\n   {\n    int rem;\n    static int sum=0;\n    if(num!=0){\n    rem=num%10;\n    sum=sum*10+rem;\n    reverse(num/10);\n    }\n    else\n  return sum;\n    return sum;\n}\n'},
        {Q:'46. What is the use of a semicolon (;) at the end of every program statement?',
        ans:'It is majorly related to how the compiler reads( or parses) the entire code and breaks it into a set of instructions(or statements), to which semicolon in C acts as a boundary between two sets of instructions.        '},
        {Q:'48. What do you mean by Dangling Pointer Variable in C Programming?',
        ans:'Ans: A Pointer in C Programming is used to point the memory location of an existing variable. In case if that particular variable is deleted and the Pointer is still pointing to the same memory location, then that particular pointer variable is called as a Dangling Pointer Variable.        '},
        {Q:'49. What do you mean by the Scope of the variable? What is the scope of the variables in C?',
        ans:'Ans: Scope of the variable can be defined as the part of the code area where the variables declared in the program can be accessed directly. In C, all identifiers are lexically (or statically) scoped.         '},
        {Q:'50. What are static variables and functions?        ',
        ans:'Ans: The variables and functions that are declared using the keyword Static are considered as Static Variable and Static Functions. The variables declared using Static keyword will have their scope restricted to the function in which they are declared.        '},
        {Q:'51.Differentiate between calloc() and malloc()',
        ans:'calloc() and malloc() are memory dynamic memory allocating functions. The only difference between them is that calloc() will load all the assigned memory locations with value 0 but malloc() will not'},
        {Q:'52.What are the valid places where the programmer can apply Break Control Statement?',
        ans:'Break Control statement is valid to be used inside a loop and Switch control statements.'},
        {Q:'53.How can we store a negative integer?',
        ans:'To store a negative integer, we need to follow the following steps. Calculate the two’s complement of the same positive integer\nEg: 1011 (-5)\nStep-1 − One’s complement of 5: 1010\nStep-2 − Add 1 to above, giving 1011, which is -5'},
        {Q:'54.Differentiate between Actual Parameters and Formal Parameters',
        ans:'The Parameters which are sent from main function to the subdivided function are called as Actual Parameters and the parameters which are declared a the Subdivided function end are called as Formal Parameters.'},
        {Q:'55.Can a C program be compiled or executed in the absence of a main()',
        ans:'The program will be compiled but will not be executed. To execute any C program, main() is required'},
        {Q:'56.What do you mean by a Nested Structure?',
        ans:' When a data member of one structure is referred by the data member of another function, then the structure is called a Nested Structure.'},
        {Q:'57.What is /0 character?',
        ans:'The Symbol mentioned is called a Null Character. It is considered as the terminating character used in strings to notify the end of the string to the compiler.'},
        {Q:'58.What is the main difference between the Compiler and the Interpreter?',
        ans:'Compiler is used in C Language and it translates the complete code into the Machine Code in one shot. On the other hand, Interpreter is used in Java Programming Langauge and other high-end programming languages. It is designed to compile code in line by line fashion.'},
        {Q:'59. Can I use int datatype to store 32768 value?',
        ans:'No, Integer datatype will support the range between -32768 and 32767. Any value exceeding that will not be stored. We can either use float or long int'},
        {Q:'60.What do you mean by Dangling Pointer Variable in C Programming?',
        ans:' A Pointer in C Programming is used to point the memory location of an existing variable. In case if that particular variable is deleted and the Pointer is still pointing to the same memory location, then that particular pointer variable is called as a Dangling Pointer Variable.'},
        {Q:'61. Where can we not use &(address operator in C)?',
        ans:'We cannot use & on constants and on a variable which is declared using the register storage class'},
        {Q:'62. Differentiate between getch() and getche()',
        ans:'getch(): reads characters from the keyboard but it does not use any buffers. Hence, data is not displayed on the screen\n getche(): reads characters from the keyboard and it uses a buffer. Hence, data is displayed on the screen.'},
        {Q:'63. Explain toupper() with an example',
        ans:'toupper() is a function designed to convert lowercase words/characters into upper case.'},
        {Q:'64.Write a code to generate random numbers in C Language.',
        ans:'int main() {\n     int a,b;\n     for(a=1;a&amp;lt;=10;a++)\n     {\n   b=rand();\n   printf("%dn",b);\n     }\n   return 0;\n}'},
        {Q:'65.Can I create a customized Head File in C language?',
        ans:' It is possible to create a new header file. Create a file with function prototypes that need to be used in the program. Include the file in the ‘#include’ section in its name.        '},
        {Q:'66.What do you mean by Memory Leak?',
        ans:'Memory Leak can be defined as a situation where programmer allocates dynamic memory to the program but fails to free or delete the used memory after the completion of the code. This is harmful if daemons and servers are included in the program.'},
        {Q:'67.Explain Local Static Variables and what is their use?',
        ans:' A local static variable is a variable whose life doesn’t end with a function call where it is declared. It extends for the lifetime of the complete program. All calls to the function share the same copy of local static variables'},
        {Q:'68.What is the difference between declaring a header file with < > and ” “?',
        ans:'If the Header File is declared using < > then the compiler searches for the header file within the Built-in Path. If the Header File is declared using ” ” then the compiler will search for the Header File in the current working directory and if not found then it searches for the file in other locations'},
        {Q:'69. Which variable can be used to access Union data members if the Union variable is declared as a pointer variable',
        ans:'Arrow Operator( -> ) can be used to access the data members of a Union if the Union Variable is declared as a pointer variable.'},
        {Q:'70.Mention File operations in C Language',
        ans:'fopen():To open file\nfclose:To close file\nfgets:To Read a file\nfprint():To write in a file'},
        {Q:'71.What are the different storage class specifiers in C?',
        ans:'auto\nregister\nstatic\nextern'},
        {Q:'72.What is typecasting?',
        ans:'Typecasting is a process of converting one data type into another is known as typecasting. If we want to store the floating type value to an int type, then we will convert the data type into another data type explicitly.'},
        {Q:'75.Write a program to swap two numbers without using the third variable',
        ans:'int main()\n {\n     int a=10, b=20;    \n     clrscr();       \n     printf("Before swapping a=%d b=%d",a,b);       \n     a=a+b;       \n     b=a-b;    \n     a=a-b;      \n     printf("nAfter swapping a=%d b=%d",a,b);      \n     getch(); \n}'},
        {Q:'76.How can you print a string with the symbol % in it?',
        ans:'There is no escape sequence provided for the symbol % in C. So, to print % we should use ‘%%’ as shown below.\nprintf(&amp;ldquo;there are 90%% chances of rain tonight&amp;rdquo;);        '},
        {Q:'Write a code to print the following pattern.\n1\n12\n123\n1234\n12345\n',
        ans:'#include&amp;lt;stdio.h&amp;gt;\nint main()\n{\n    for(i=0;i&amp;lt;=5;i++){\n     for(j=1;j&amp;lt;=5;j++){\n     print("%d",j);\n}\n printf("n");\n}\nreturn 0;\n}'},
        {Q:'77.Explain the # pragma directive',
        ans:'The following points explain the Pragma Directive:\nThis is a preprocessor directive that can be used to turn on or off certain features\nIt is of two types #pragma startup, #pragma exit and pragma warn\n#pragma startup allows us to specify functions called upon program startup\n#pragma exit allows us to specify functions called upon program exit\n#pragma warn tells the computer to suppress any warning or not'},
        {Q:'78.What is Round-robin algorithm?',
        ans:'Round-robin Algorithm is one of the algorithms employed by process and network schedulers in computing in order to evenly distribute resources in the system'},
        {Q:'79. Which structure is used to link the program and the operating system?',
        ans:'The answer can be explained through the following points:\nThe structure used to link the operating system to a program is file\nThe file is defined in the header file “stdio.h”(standard input/output header file)\nIt contains the information about the file being used, its current size and its location in memory\nIt contains a character pointer that points to the character that is being opened\nOpening a file establishes a link between the program and the operating system about which file is to be accessed'},
        {Q:'80.What are the limitations of scanf() and how can it be avoided?',
        ans:'The Limitations of scanf() are as follows:\nscanf() cannot work with the string of characters.\nIt is not possible to enter a multiword string into a single variable using scanf()\nTo avoid this the gets( ) function is used.\nIt gets a string from the keyboard and is terminated when enter key is pressed.\nHere the spaces and tabs are acceptable as part of the input string.'},
        {Q:'81. Suppose a global variable and local variable have the same name. Is it is possible to access a global variable from a block where local variables are defined',
        ans:'No. It is not possible in C. It is always the most local variable that gets preference.'},
        {Q:'82. Differentiate between the macros and the functions.',
        ans:'Macro call replaces the templates with the expansion in a literal way\nThe Macro call makes the program run faster but also increases the program size\nMacro is simple and avoids errors related to the function calls.\nIn a function, call control is transferred to the function along with arguments\nIt makes the functions small and compact\nPassing arguments and getting back the returned value takes time and makes the program run at a slower rate'},
        
    ]
  return (
    <ImageBackground source={{uri:"https://img.icons8.com/color/480/c-programming.png"}} blurRadius={40} style={{backgroundColor:'white'}}>
  
  <View style={{marginTop:'10%',color:'white',alignItems:'center',position:'relative',marginBottom:20}}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20,color:'black'}}>Interview Questions</Text>
          </View>
            <FlatList
      data={data}
      style={{marginBottom:"20%"}}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return(
            
          <View style={styles.container}>
            <Text style={styles.qsn} >{item.Q}</Text>
            <Text style={styles.ans} >{item.ans}</Text>
        
          </View>
          
        )
      }}
      />
      
    </ImageBackground>
  );
}


const styles=StyleSheet.create({
    qsn:{
        fontSize:25,
        color:"black",
        fontWeight:'bold',
    },
    ans:{
        fontSize: 20,
        color:'black',
        
    },
    container:{
        marginTop:40,
        marginHorizontal:20,
        padding:10,
        borderRadius:20,
        shadowColor: 'black',
      shadowOffset: { width: 2, height:2},
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 8,
      padding: 20,
    }
})