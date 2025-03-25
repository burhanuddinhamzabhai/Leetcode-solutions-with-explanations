# Longest Substring Without Repeating Characters  

## 1️⃣ Problem Statement  
Given a string `s`, find the **length** of the **longest substring** that does not contain duplicate characters.  

### **Constraints:**  
- `0 <= s.length <= 50,000`  
- `s` consists of English letters, digits, symbols, and spaces.  

---

## 2️⃣ Example Walkthrough  

### **Example 1**  
**Input:**  
```ts
s = "abcabcbb"
```  
**Output:**  
```ts
3
```  
**Explanation:** The longest substring without repeating characters is **"abc"** (length `3`).  

### **Example 2**  
**Input:**  
```ts
s = "bbbbb"
```  
**Output:**  
```ts
1
```  
**Explanation:** The longest substring without repeating characters is **"b"** (length `1`).  

### **Example 3**  
**Input:**  
```ts
s = "pwwkew"
```  
**Output:**  
```ts
3
```  
**Explanation:** The longest substring is **"wke"** (length `3`).  

---

## 3️⃣ Preferred Solution: Sliding Window with HashMap  
We use a **HashMap** to store the last index of characters and apply a **sliding window** approach.  
This ensures an **O(n)** time complexity.  

---

## 4️⃣ Actual Solution (TypeScript)  

```ts
function lengthOfLongestSubstring(s: string): number {
    let charMap = new Map<string, number>();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right])! + 1);
        }

        charMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
```  

---

## 5️⃣ Step-by-Step Explanation  
1. **Use a HashMap (`charMap`)** to store the last index of each character.  
2. **Use two pointers (`left` and `right`)** to create a **sliding window**.  
3. If a character **repeats**, **move `left` pointer** to **skip past** the last occurrence.  
4. Update `maxLength` each time a **longer substring** is found.  

---

## 6️⃣ Time & Space Complexity  
| Approach | Time Complexity | Space Complexity |
|----------|---------------|----------------|
| **Brute Force (`O(n²)`)** | **Too Slow** | **O(1)** |
| **Sliding Window (`O(n)`)** | **Optimal** | **O(1) / O(n) (if all unique)** |

---

## 7️⃣ Other Available Solutions & Optimizations  

### **1. Brute Force (`O(n²)`)**
- Try **all substrings** and check for duplicates.
- **Too slow for large inputs (`50,000`).**  

### **2. Sliding Window with Set (`O(n)`)**
- Use a **Set** instead of a HashMap.
- Similar efficiency but **less flexible** for variations.

---

## 🔥 Conclusion  
✔ **Sliding Window (`O(n)`)** ensures **fast** processing.  
✔ **Handles spaces, special characters, and large inputs.**  
✔ **Uses minimal extra space (`O(1)`).**  
