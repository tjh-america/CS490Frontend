def op(a, b, c):
    if c=="+":
        return a+b
    elif c=="-":
        return a-b
    elif c=="*":
        return a*b
    elif c=="/":
        return a/b
    else:
        return -1
def helloWorld():
    return "hello world"
def sleepIn(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

def factorial(n):
    num = 1
    while n >= 1:
        num = num * n
        n = n - 1
    return num
def addThree(a, b, c):
    return a+b+c
