const {
  basename,
  extname,
  format,
  parse,
  isAbsolute,
  join,
  resolve,
} = require("node:path");
const {
  unlink,
  unlinkSync,
  rmSync,
  mkdir,
  mkdirSync,
  readFileSync,
  writeFileSync,
  writeFile,
  exists,
  existsSync,
} = require("node:fs");

const { EventEmitter } = require("node:events");
const { exit } = require("node:process");
const event = new EventEmitter();
const { platform, arch } = require("node:os");

/**Q1)  1. Write a function that logs the current file path and directory. (0.5 Grade) 
• Output Example: {File: “/home/user/project/index.js”, Dir: “/home/user/project”} 

console.log({ File: __filename, Dir: __dirname });
 
 */
/**Q2)2. Write a function that takes a file path and returns its file name. (0.5 Grade) 
• Input Example: /user/files/report.pdf 
• Output Example: "report.pdf " 
 *
const result = basename("/user/files/report.pdf");
console.log({ result });
 */
/**Q3)3. Write a function that builds a path from an object (0.5 Grade) 
• Input Example: { dir: "/folder", name: "app", ext: ".js"} 
• Output Example: “/folder/app.js”
 *
function fileDestructing(filePath) {
  console.log(format(filePath));
}
fileDestructing({ dir: "/folder", name: "app", ext: ".js" });

 */

/**Q4)4. Write a function that returns the file extension from a given file path. (0.5 Grade) 
• Input Example: /docs/readme.md" 
• Output Example: “.md” 
 *
function fileExtension(filePath) {
  console.log({ Extension: extname(filePath) });
}
fileExtension("/docs/readme.md");

 */

/**Q5)5. Write a function that parses a given path and returns its name and ext. (0.5 Grade) 
• Input Example: /home/app/main.js 
• Output Example: { Name: “main”, Ext: “.js” }
 *
function fileParse(filePath) {
  const { ext, name } = parse(filePath);
  console.log({ Name: name, Ext: ext });
}

fileParse("/home/app/main.js");
 */

/**Q6)6. Write a function that checks whether a given path is absolute. (0.5 Grade) 
• Input Example: /home/user/file.txt 
• Output Example: true
 *
function checkIsAbsolute(filePath) {
  console.log(isAbsolute(filePath));
}
checkIsAbsolute("/home/user/file.txt ");
 */

/**Q7)7. Write a function that joins multiple segments (0.5 Grade) 
• Input: "src", "components", "App.js" 
• Output Example: src/components/App.js
 *
function joinFiles(...files) {
  console.log(join(...files));
}
joinFiles("src", "components", "App.js");

 */

/**Q8)8. Write a function that resolves a relative path to an absolute one. (0.5 Grade) 
• Input Example: ./index.js 
• Output Example: /home/user/project/src/index.js
 *
function resolvePath(filePath) {
  console.log(resolve(filePath));
}
resolvePath("index.js");

 */

/*Q9)9. Write a function that joins two paths. (0.5 Grade) 
• Input Example: /folder1, folder2/file.txt 
• Output Example: /folder1/folder2/file.txt

function joinFiles(filePath01, filePath02) {
  const result = join(filePath01, filePath02);
  console.log({ result });
}
joinFiles("folder1", "folder2/file.txt");
*/

/*Q10)10. Write a function that deletes a file asynchronously. (0.5 Grade) 
• Input Example: /path/to/file.txt 
• Output Example: The file.txt is deleted. 

function deleteFile(fileName) {
  unlink(fileName, (err) => {
    err
      ? console.log({ err })
      : console.log(`File ${fileName} deleted successfully`);
  });
}

deleteFile("file.txt");

*/

/*Q11)11. Write a function that creates a folder synchronously. (1 Grade) 
• Output Example: “Success” 
function createFolder(name) {
  mkdirSync(resolve(name));
  console.log(`Success`);
}
createFolder("hell");
*/

/*Q12)12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade) 
• Output Example: Welcome event triggered! 
event.on("start", () => {
  console.log(`Welcome event triggered! `);
});
event.emit("start");


*/

/*Q13)13. Emit a custom "login" event with a username parameter. (0.5 Grade) 
• Input Example: "Ahmed" 
• Output Example: “User logged in: Ahmed”
event.on("login", (username) => {
  console.log(`User logged in ${username}`);
});
event.emit("login", "Gamal");

*/

/*Q14) Read a file synchronously and log its contents. (1 Grade) 
• Input Example: "./notes.txt" 
• Output Example: the file content => “This is a note.” 

const result = readFileSync(resolve("./notes.txt"), { encoding: "utf-8" });
console.log(`This file content => ${result}`);
*/

/*Q15)15. Write asynchronously to a file. (1 Grade) 
• Input: path: "./async.txt", content: "Async save"

writeFile(
  resolve(`./async.txt`),
  `Async save`,
  { encoding: "utf-8" },
  (err) => {
    if (err) console.log({ err });
  },
);


*/
/*Q16)16. Check if a directory exists. (0.5 Grade) 
• Input Example: "./notes.txt" 
• Output Example: true 
console.log(existsSync(`./notes.txt`));
*/

/*Q17)17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade) 
• Output Example: {Platform: “win32”, Arch: “x64”}

function osInfo() {
  return { Platform: platform(), Arch: arch() };
}
const result = osInfo();
console.log({ result });
*/
