# Median of Two Sorted Arrays  

## 1️⃣ Problem Statement  
Given two **sorted arrays** `nums1` and `nums2` of sizes `m` and `n` respectively, return the **median** of the merged array.  

### **Constraints:**  
- `nums1.length == m`, `nums2.length == n`  
- `0 <= m, n <= 1000`  
- `1 <= m + n <= 2000`  
- `-10⁶ <= nums1[i], nums2[i] <= 10⁶`  
- **Time Complexity must be `O(log(m+n))`**  

---

## 2️⃣ Example Walkthrough  

### **Example 1**  
**Input:**  
```ts
nums1 = [1,3], nums2 = [2]
```  
**Output:**  
```ts
2.00000
```  
**Explanation:**  
Merged array = `[1,2,3]`, and the median is `2`.  

### **Example 2**  
**Input:**  
```ts
nums1 = [1,2], nums2 = [3,4]
```  
**Output:**  
```ts
2.50000
```  
**Explanation:**  
Merged array = `[1,2,3,4]`, and the median is `(2 + 3) / 2 = 2.5`.  

---

## 3️⃣ Preferred Solution: Binary Search Approach  
We use **binary search** on the smaller array to partition both arrays optimally, ensuring `O(log(m+n))` complexity.  

---

## 4️⃣ Actual Solution (TypeScript)  

```ts
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];  // Ensure nums1 is the smaller array
    }

    let x = nums1.length, y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxLeftX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        let minRightX = (partitionX === x) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        let minRightY = (partitionY === y) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Invalid input");
}
```  

---

## 5️⃣ Step-by-Step Explanation  
1. **Ensure `nums1` is smaller** for efficient binary search.  
2. **Use Binary Search** to find correct partition:  
   - `partitionX` divides `nums1`  
   - `partitionY` divides `nums2`  
3. **Check partition validity**:  
   - If valid, compute the median.  
   - Else, adjust `low` or `high` and continue.  
4. **Handle odd/even cases** for median computation.  

---

## 6️⃣ Error Handling & Edge Cases  

| Edge Case | Handling |
|-----------|---------|
| **One Empty Array (`nums1 = []`)** | Directly return median of `nums2`. |
| **Arrays of Different Sizes** | Works correctly with binary search logic. |
| **Negative & Positive Numbers** | Works since values are compared numerically. |
| **Large Input (`m + n = 2000`)** | Efficiently runs in `O(log(m+n))`. |
| **All Elements Same (`[2,2,2]`, `[2,2,2]`)** | Correctly returns `2.0`. |

---

## 7️⃣ Time & Space Complexity  
| Approach | Time Complexity | Space Complexity |
|----------|---------------|----------------|
| **Brute Force (`O(m+n)`)** | **Too Slow** | **O(m+n)** |
| **Binary Search (`O(log(m+n))`)** | **Optimal** | **O(1)** |

---

## 8️⃣ Other Available Solutions & Optimizations  

### **1. Merge and Find Median (`O(m+n)`)**
- Merge both arrays, then find the median.
- **Too slow for large inputs (`2000`).**  

### **2. Binary Search on Smaller Array (`O(log(min(m,n)))`)**
- Reduces search space further but similar concept.  

Thus, **Binary Search (`O(log(m+n))`) is the best approach**.

---

## 🔥 Conclusion  
✔ **Binary Search (`O(log(m+n))`)** ensures efficient median computation.  
✔ **Handles edge cases, different sizes, and negative values properly.**  
✔ **Space complexity is `O(1)`, no extra storage needed.**  
