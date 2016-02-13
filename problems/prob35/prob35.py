def ex_oh(string):
    ex = []
    oh = []
    for char in string:
        if char == 'x':
            ex.append(char)
        else:
            oh.append(char)
    if len(ex) == len(oh):
        return True
    else:
        return False


print ex_oh('xooxxo') == True
print ex_oh('x') == False
