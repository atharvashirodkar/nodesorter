# 🗂️ File Organizer Script

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

---

## 📖 Overview

The **File Organizer Script** is a lightweight Node.js utility that automatically organizes files in your `public/` directory by their **file extensions**.

It’s perfect for cleaning up messy folders by sorting files like images, PDFs, and text documents into dedicated subfolders (e.g., `.jpg → /jpg`, `.txt → /txt`).

---

## 🚀 Features

✅ Automatically detects file types  
✅ Creates folders based on extensions  
✅ Skips JavaScript, JSON, and folders  
✅ Zero dependencies — pure Node.js  
✅ Fast, simple, and beginner-friendly  

---

## 📦 Project Structure

```
📁 your-project/
 ┣ 📂 public/
 ┃ ┣ 🖼️ image1.png
 ┃ ┣ 📄 document.txt
 ┃ ┣ 🎵 song.mp3
 ┃ ┗ 📂 (organized folders will appear here)
 ┣ 📜 organize.js
 ┣ 📜 README.md
 ┗ 📜 package.json
```

After running the script, your `public/` directory will be neatly organized:

```
📁 public/
 ┣ 📂 png/
 ┃ ┗ image1.png
 ┣ 📂 txt/
 ┃ ┗ document.txt
 ┗ 📂 mp3/
   ┗ song.mp3
```

---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) version **18+**
- A `public/` folder containing files you want to organize

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/atharvashirodkar/nodesorter.git
cd nodesorter
```

### 3️⃣ Install Dependencies

> No external dependencies needed — uses built-in Node.js modules (`fs`, `path`, `url`).

### 4️⃣ Run the Script

If your file is named `organize.js`:

```bash
node organize.js
```

You’ll see:

```
✅ Files organized successfully!
```

---

## 🧠 How It Works

The script uses **Node.js built-in modules**:
- `fs` and `fs/promises` for reading and moving files
- `path` for managing directory paths
- `url` for ES module compatibility

### Core Logic:
1. Reads all files from `/public`
2. Detects each file’s extension
3. Skips folders, `.js`, and `.json` files
4. Creates a new folder for each extension (if not existing)
5. Moves files into the correct subfolder

```js
fs.renameSync(
  path.join(basePath, item),
  path.join(basePath, ext, item)
);
```

---

## 🧩 Example Output

Before:
```
public/
├─ photo.png
├─ report.pdf
├─ notes.txt
```

After:
```
public/
├─ png/photo.png
├─ pdf/report.pdf
├─ txt/notes.txt
```

---

## 🆘 Getting Help

If you encounter issues:
- Check your Node version (`node -v`)
- Ensure the `public/` folder exists
- Verify that files are not currently open by other programs

For bugs or suggestions:
- Open an issue: [issues](../../issues)
- Check documentation in `docs/`

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:
1. Fork the repo  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes  
4. Submit a PR  

For detailed guidelines, see [CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 👥 Maintainers & contributing

- Maintainer: `atharvashirodkar` (see `package.json`)

<!-- 📧 [your.email@example.com](mailto:your.email@example.com)  
🌐 [your-portfolio-link.com](https://your-portfolio-link.com) -->

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### ⭐ If you found this helpful, give it a star on GitHub!
