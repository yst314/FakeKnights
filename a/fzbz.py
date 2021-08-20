def fizzbuzz(i):
    ret = ""
    if not i % 3:
        ret += "fizz"
    if not i % 5:
        ret += "buzz"
    if not ret:
        ret = str(i)
    return ret

for i in range(100):
    print(fizzbuzz(i))
