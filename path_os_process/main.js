const path = require('path');

const os = require("os");

const process = require('process');

// 1.  Print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// 2. Print out the separator of a given file path
const seperator = path.sep;
console.log(seperator);

// 3. Print out the extension name of a file path
const extName = path.extname('C:/Users/DELL/documents/altschool/NodeJS_Assignment_1/path_os_process/package.json');
console.log(extName);

// 4. Print out the process id of the current running process
// Node version
const nodeVersion = process.versions;
console.log(nodeVersion);

// Node.js release
const nodeRelease = process.release;
console.log(nodeRelease);

// 5. Print out the user information of the os
const user = os.userInfo()
console.log(user)

// 6. Print out the platform of an operating system
const platform = os.platform()
console.log(platform)