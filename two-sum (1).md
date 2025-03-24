# Two Sum  

## 1️⃣ Problem Statement  
Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`.  

### **Constraints:**  
- Each input has **exactly one** solution.  
- The **same element** cannot be used twice.  
- The answer can be returned in **any order**.  

### **Example Walkthrough**  
#### **Example 1**  
**Input:**  
```ts
nums = [2,7,11,15], target = 9
```  
**Output:**  
```ts
[0,1]
```  
**Explanation:** `nums[0] + nums[1] == 9`, so we return `[0,1]`.  

#### **Example 2**  
**Input:**  
```ts
nums = [3,2,4], target = 6
```  
**Output:**  
```ts
[1,2]
```  

---

## 2️⃣ Preferred Solution: HashMap Approach  
We use a **HashMap** to store numbers and their indices.  
This reduces the **time complexity** from **O(n²) (brute force)** to **O(n)**.  
Space complexity is **O(n)** because we store elements in the map.  

---

## 3️⃣ Dry Run Example  

For `nums = [2,7,11,15]` and `target = 9`  

| Index | Num  | Complement (Target - Num) | HashMap (Stored Values) |
|--------|------|--------------------------|-------------------------|
| 0      | 2    | 9 - 2 = 7                | `{2: 0}`               |
| 1      | 7    | 9 - 7 = 2                | `{2: 0}` (Found 2 at index 0) |

Since `2` exists at index `0`, return `[0,1]`.

---

## 4️⃣ Actual Solution (TypeScript)  
```ts
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(nums[i], i);
    }

    throw new Error("No valid solution exists");
}
```  

---

## 5️⃣ Step-by-Step Explanation  
1. **Initialize a HashMap (`numMap`)** to store numbers and their indices.  
2. **Loop through the array** (`for` loop).  
3. **Calculate the complement** (`target - nums[i]`).  
4. **Check if the complement exists** in `numMap`:  
   - If **yes**, return the indices `[numMap.get(complement), i]`.  
   - If **no**, store `nums[i]` in `numMap`.  
5. **If no valid solution exists**, throw an error.  

---

## 6️⃣ Error Handling & Edge Cases  
| Edge Case | Handling |
|-----------|---------|
| **Negative numbers** | Works normally since we use subtraction. |
| **Only two elements** | The problem guarantees a solution, so `[0,1]` is returned. |
| **Large numbers** | The solution handles `-10^9` to `10^9` easily. |
| **Duplicate values** | Works correctly due to index tracking in `numMap`. |

---

## 7️⃣ Time & Space Complexity  
| Approach | Time Complexity | Space Complexity |
|----------|---------------|----------------|
| **Brute Force (Nested Loops)** | **O(n²)** | **O(1)** |
| **HashMap Approach (Optimized)** | **O(n)** | **O(n)** |

---

## 8️⃣ Other Available Solutions & Optimizations  
### **1. Brute Force (`O(n²)`)**  
   - Nested loops checking all pairs.  
   - **Not preferred** due to inefficiency.  

### **2. Sorting + Two Pointers (`O(n log n)`)**  
   - Sort the array, use two pointers (`left`, `right`).  
   - **Not usable here**, as we need **indices**, and sorting loses them.  

---

## 🔥 Conclusion  
- **HashMap solution is optimal (`O(n)`)**.  
- **Space complexity is `O(n)`, but necessary**.  
- **Handles all edge cases correctly**.  
