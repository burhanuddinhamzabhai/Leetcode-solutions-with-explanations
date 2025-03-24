# Add Two Numbers  

## 1️⃣ Problem Statement  
You are given two **non-empty** linked lists representing two **non-negative** integers.  
The digits are stored **in reverse order**, and each node contains a **single digit**.  

Return the sum as a **new linked list**.  

### **Constraints:**  
- The number of nodes in each linked list is **between 1 and 100**.  
- Each node’s value is **between 0 and 9**.  
- The input does **not contain leading zeros**, except for the number `0` itself.  

---

## 2️⃣ Example Walkthrough  

### **Example 1**  
**Input:**  
```ts
l1 = [2,4,3], l2 = [5,6,4]
```  
**Output:**  
```ts
[7,0,8]
```  
**Explanation:**  
```
342 + 465 = 807
```
Stored in reverse order: `[7,0,8]`.  

### **Example 2**  
**Input:**  
```ts
l1 = [0], l2 = [0]
```  
**Output:**  
```ts
[0]
```  

### **Example 3**  
**Input:**  
```ts
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
```  
**Output:**  
```ts
[8,9,9,9,0,0,0,1]
```  

---

## 3️⃣ Preferred Solution: Iterative Approach with Carry  
We traverse both linked lists **simultaneously**, adding corresponding digits and handling carry.  
This results in an **O(n)** time complexity.  

---

## 4️⃣ Actual Solution (TypeScript)  

```ts
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}
```  

---

## 5️⃣ Step-by-Step Explanation  
1. **Initialize a dummy head node (`dummyHead`)** for easy list creation.  
2. **Traverse both lists**, extracting values (`x` and `y`) and computing `sum = x + y + carry`.  
3. **Store the carry** (`Math.floor(sum / 10)`) for the next addition.  
4. **Create new nodes** with `sum % 10` and append to the result list.  
5. **If there's a remaining carry**, add a new node.  
6. **Return `dummyHead.next`**, which is the actual result list.  

---

## 6️⃣ Time & Space Complexity  
| Approach | Time Complexity | Space Complexity |
|----------|---------------|----------------|
| **Iterative Addition** | **O(n)** | **O(n)** |

---

## 7️⃣ Other Available Solutions & Optimizations  

### **1. Recursive Approach (`O(n)`)**
- Uses recursion instead of iteration.
- **Problem:** Higher space usage due to recursion stack.

### **2. Convert to Numbers (Not Recommended)**
- Convert linked lists to numbers, sum them, then create a new list.
- **Problem:** JavaScript has a `Number.MAX_SAFE_INTEGER` limit, so it fails for very large lists.

Thus, **the iterative approach is optimal**.

---

## 🔥 Conclusion  
✔ **Uses an efficient `O(n)` iterative approach** with a dummy head node.  
✔ **Handles different list lengths, carry overflow, and edge cases properly.**  
✔ **Scales well with linked lists up to 100 nodes.**  
