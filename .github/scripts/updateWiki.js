const fs = require("fs");
const path = require("path");

const categories = ["easy", "medium", "hard"];
const wikiDir = path.join(process.cwd(), "wiki-repo");

// Ensure wiki directory exists
if (!fs.existsSync(wikiDir)) {
    console.error("❌ Error: Wiki repository not found. Make sure it's cloned.");
    process.exit(1);
}

categories.forEach((category) => {
    const dirPath = path.join(process.cwd(), category);
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".md"));

    if (files.length === 0) return;  // Avoid creating empty wiki pages

    let content = `# ${category.charAt(0).toUpperCase() + category.slice(1)} Problems\n\n`;
    content += "## List of Problems\n\n";

    files.forEach((file) => {
        const problemName = file.replace(".md", "").replace(/-/g, " ");
        content += `- [${problemName}](../blob/main/${category}/${file})\n`;
    });

    fs.writeFileSync(path.join(wikiDir, `${category}-problems.md`), content);
});

console.log("✅ Wiki pages updated successfully!");
